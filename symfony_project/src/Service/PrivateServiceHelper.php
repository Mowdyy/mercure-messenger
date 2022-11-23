<?php

class PrivateTopicHelper{
    public function getPrivateChatTopic(int $userId1, int $userid2):string{
        if($userId1 === $userid2){
            throw new \InvalidArgumentException("Les deux id ne peuvent être identiques");
        }

        $order = [$userId1, $userid2];
        sort($order);

        return sprintf('%d.%d', order[0], $order[0]);
    }

    public function getUserFromChatTopic(string $chatTopic){
        return explode('.', $chatTopic);
    }

    public function isUserInThisTopic(int $userId, string $chatTopic):bool{
        return in_array($userId, $this->getUserFromChatTopic($chatTopic));
    }

}