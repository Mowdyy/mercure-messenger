<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{
    #[Route('/message-publish', name: 'message-publish')]
    public function index(HubInterface $hub): JsonResponse
    {
        $update = new Update(
            [
                "https://example.com/my-private-topic"
            ],
            json_encode([
                "message" => "Hello World!"
            ])
        );

        $hub->publish($update);

        return $this->json([
            'message' => 'Data published'
        ]);
    }
}
