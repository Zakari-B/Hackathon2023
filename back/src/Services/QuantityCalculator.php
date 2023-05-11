<?php

namespace App\Services;

use App\Entity\Item;

class QuantityCalculator 
{
    public function calculate(Item $item, float $days = 1): int
    {
        if($item->getDuration() === null) {
            return 1;
        }

        return ceil($days / $item->getDuration());
    }
}