<?php

namespace App\Controller;

use App\Entity\Channel;
use App\Repository\ChannelRepository;
use App\Repository\MessageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChannelController extends AbstractController
{
    #[Route('/channel', name: 'channel')]
    public function index(ChannelRepository $channelRepository): Response
    {
        //render all channels in react
        return $this->json([
            'channels' => $channelRepository->findAll()
        ], 200, [], ['groups' => 'main']);
    }

    #[Route('/chat{id}', name: 'chat')]
    public function chat(Channel $channel, MessageRepository $messageRepository): Response
    {
        //get a user messages
        $messages = $messageRepository->findOneBy([
            'channel' => $channel
        ], ['createdAt' => 'ASC']);

        //render a user channel and messages in react 
        return $this->json([
            'channel' => $channel,
            'messages' => $messages
        ], 200);
    }


}
