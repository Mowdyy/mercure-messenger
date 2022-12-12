<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\User;
use App\Repository\ChannelRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\PublisherInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MessageController extends AbstractController
{
    //Poster les messages depuis react via l'API /message
    #[Route('/message', name: 'message', methods: 'POST')]
    public function sendMessage(
        Request $request,
        ChannelRepository $channelRepository,
        SerializerInterface $serializer,
        EntityManagerInterface $em,
        HubInterface $hub
       ): JsonResponse
    {

        // $data = \json_decode($request->getContent(), true); // On récupère les data postées et on les déserialize
        // if (empty($content = $data['content'])) {
        //     throw new AccessDeniedHttpException('Pas de données postées');
        // }
       
        // $channel = $channelRepository->findOneBy([
        //     'id' => $data['channel'] // On cherche à savoir de quel channel provient le message
        // ]);
        

        // if (!$channel) {
        //     throw new AccessDeniedHttpException("Le message doit être envoyé depuis un channel spéfifique");
        // }

        // if ($this->getUser()) {
        //     $message = new Message(); // Après validation, on crée le nouveau message
        //     $message->setContent($content);
        //     $message->setChannel($channel); 
        //     $message->setUser($this->getUser()); // On lui attribue comme auteur l'utilisateur courant
        //     $em->persist($message);
        //     $em->flush(); // Sauvegarde du nouvel objet en DB

        //     $jsonMessage = $serializer->serialize($message, 'json', [
        //         'groups' => ['message'] // On serialize la réponse avant de la renvoyer
        //     ]);
            
        //     //Publier les messages sur le hub
        //     $update = new Update( // Création d'une nouvelle update
        //         [
        //             "https://example.com/mercure-chat",
        //             "https://example.com/channel/{$channel->getId()}/?topic=" . urlencode("example.com/mercure-chat"),
        //             // "https://example.com/user/{$user->getId()}/?topic=" . urlencode("https://example.com/channel/{$channel->getId()}/")
        //         ], // On précise le topic, avec pour Id l'identifiant de notre Channel
        //         $jsonMessage,// On y passe le message serializer en content value
        //         true, //Utilisateur doit être authentifié 
        //     );
        //     $hub->publish($update); // Le Publisher est un service invokable. On peut publier directement

        //     return new JsonResponse( // Enfin, on retourne la réponse
        //         $jsonMessage,
        //         Response::HTTP_OK,
        //         [],
        //         true
        //     );
        // }
     
    

        return $this->json([
            'message' =>  $request->cookies,
            // 'message' =>  $this->getUser(),
        ]);
        
    }

}
