<?php

declare(strict_types=1);

namespace App\Command;

use App\Entity\Channel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

//Commande pour créer le channel: docker-compose exec php bin/console create:channel myPersoChannel 
class CreateChannelCommand extends Command
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em, string $name = 'create:channel')
    {
        parent::__construct($name);

        $this->em = $em;
    }

    public function configure(): void
    {
        $this
            ->setDescription('Créer un nouveau channel')
            ->setDefinition(
                [
                    new InputArgument('name', InputArgument::REQUIRED, 'name')
                ]
            )
            ->setHelp(
                <<<'EOT'
La <info>create:channel</info>Commande pour créer un channel avec <info>name</info> argument
EOT
            );
    }

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $name = $input->getArgument('name');
        $channel = $this->em->getRepository(Channel::class)->findOneBy([
            'name' => $name
        ]);

        if ($channel) {
            throw new \Exception("Cet channel existe déjà");
        }

        $channel = (new Channel())
            ->setName($name);

        $this->em->persist($channel);
        $this->em->flush();

        return 0;
    }
}