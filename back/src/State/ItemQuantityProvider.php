<?php

namespace App\State;

use ApiPlatform\Metadata\CollectionOperationInterface;
use App\Entity\Item;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Services\QuantityCalculator;

class ItemQuantityProvider implements ProviderInterface
{
    public function __construct(private ProviderInterface $provider, private QuantityCalculator $quantityCalculator)
    {
    }

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        $duration = $context['filters']['duration'] ?? 1;

        $item = $this->provider->provide($operation, $uriVariables, $context);
        $item->setQuantity($this->quantityCalculator->calculate($item, $duration));
        return $item ?? [];
    }
}
