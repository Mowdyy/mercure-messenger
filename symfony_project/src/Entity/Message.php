<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups('message')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups('message')]
    private $content;

    #[Groups('message')]
    #[ORM\Column(type: 'datetime', nullable: true)]
    private $createAt;

    #[ORM\ManyToMany(targetEntity: ChatsRoom::class, inversedBy: 'messages')]
    private $Chat_id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'messages')]
    private $user;

    public function __construct()
    {
        $this->User = new ArrayCollection();
        $this->Chat_id = new ArrayCollection();
        $this->Date = new \DateTimeImmutable();
        $this->user = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return Collection|ChatsRoom[]
     */
    public function getChatId(): Collection
    {
        return $this->channel;
    }

    public function setChannel(?Channel $channel): self
    {
        $this->channel = $channel;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }


}
