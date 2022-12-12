<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\CookieHelper;
use App\Service\JWTHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(JWTHelper $helper, HubInterface $hub, CookieHelper $cookieHelper, Request $request,): Response
    {

        /** @var User $user */
        $user = $this->getUser();

        return $this->json(
            [
                "message" => $helper->createJWT($user)
            ],
            Response::HTTP_OK,
            [
                "set-cookie" => $cookieHelper->createMercureCookie($user)
            ]
            );
        }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
