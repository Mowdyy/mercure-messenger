<?php

declare(strict_types=1);

namespace App\Command;

use App\Entity\Channel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

// Commande pour supprimer un channel : docker-compose exec php bin/console delete:channel myPersoChannel
class DeleteChannelCommand extends Command
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em, string $name = 'delete:channel')
    {
        parent::__construct($name);

        $this->em = $em;
    }

    public function configure(): void
    {
        $this
            ->setDescription('Suprimer un channel')
            ->setDefinition([
                new InputArgument('name', InputArgument::REQUIRED, 'name')
            ])
            ->setHelp(
                <<<'EOT'
La <info>delete:channel</info> commande pour supprimer <info>name</info> argument
EOT
            );
    }

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $name = $input->getArgument('name');
        $channel = $this->em->getRepository(Channel::class)->findOneBy([
            'name' => $name
        ]);

        if (!$channel) {
            throw new \Exception("Ce channel n'existe pas");
        }

        $this->em->remove($channel);
        $this->em->flush();

        return 0;
    }
}