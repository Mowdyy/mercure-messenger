<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime_immutable')]
    private $Date;

    #[ORM\Column(type: 'text')]
    private $Content;

    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'messages')]
    private $User;

    #[ORM\ManyToMany(targetEntity: ChatsRoom::class, inversedBy: 'messages')]
    private $Chat_id;

    public function __construct()
    {
        $this->User = new ArrayCollection();
        $this->Chat_id = new ArrayCollection();
        $this->Date = new DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeImmutable
    {
        return $this->Date;
    }

    public function setDate(\DateTimeImmutable $Date): self
    {
        $this->Date = $Date;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->Content;
    }

    public function setContent(string $Content): self
    {
        $this->Content = $Content;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUser(): Collection
    {
        return $this->User;
    }

    public function addUser(User $user): self
    {
        if (!$this->User->contains($user)) {
            $this->User[] = $user;
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        $this->User->removeElement($user);

        return $this;
    }

    /**
     * @return Collection|ChatsRoom[]
     */
    public function getChatId(): Collection
    {
        return $this->Chat_id;
    }

    public function addChatId(ChatsRoom $chatId): self
    {
        if (!$this->Chat_id->contains($chatId)) {
            $this->Chat_id[] = $chatId;
        }

        return $this;
    }

    public function removeChatId(ChatsRoom $chatId): self
    {
        $this->Chat_id->removeElement($chatId);

        return $this;
    }
}
