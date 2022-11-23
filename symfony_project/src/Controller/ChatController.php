<?php

namespace App\Controller;

use App\Entity\Message;
use App\Repository\MessageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
            
    #[Route('/messages', name: 'messages', methods: 'GET')]
    public function getAllMessages(MessageRepository $messageRepository): JsonResponse
    {   
        $messages = $messageRepository->findAll();
        return $this->json($messages);
    }

    #[Route('/messages/add', name: 'messages-add', methods: 'POST')]
    public function index(HubInterface $hub): JsonResponse
    {
        $newMessage = new Message();
        $update = new Update(
            ["https://example.com/my-private-topic"],
            json_encode(["message" => "Hello World!"])
        );

        $hub->publish($update);

        return $this->json([
            'message' => 'Ping sent'
        ]);
    }
}
        $this->json($newMessage);
        return $this->redirectToRoute('messages');
    }
}
