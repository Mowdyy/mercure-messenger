<?php

namespace App\DataFixtures;

use App\Factory\ChannelFactory;
use App\Factory\MessageFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        UserFactory::createMany(10);
        ChannelFactory::createMany(5);
        MessageFactory::createMany(10);
    }
}
