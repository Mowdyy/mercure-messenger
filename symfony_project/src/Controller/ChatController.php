<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{

    #[Route('/message/{user}', name: 'message_user', methods: 'POST')]
    public function chat(User $user, HubInterface $hub)
    {
        //Publisher - Publication d'un chat
        $update = new Update(
            [
                "https://example.com/message-topic",
                "https://example.com/user/{$user->getId()}/?topic=" . urlencode("https://example.com/message-topic")
            ],
            json_encode([
                'user' => $user->getUsername(),
                'id' => $user->getId()
            ]),
            true
        );

        $hub->publish($update);

        return $this->json([
            'message' => 'Ping sent'
        ]);
    }
}