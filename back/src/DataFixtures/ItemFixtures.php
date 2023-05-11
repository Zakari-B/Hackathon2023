<?php

namespace App\DataFixtures;

use App\Entity\Item;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ItemFixtures extends Fixture
{
    public const ITEMS = [
        ['name' => 'ID', 'image' => 'https://cdn-icons-png.flaticon.com/512/1726/1726620.png', 'duration' => null],
        ['name' => 'sunglasses', 'image' => 'https://cdn-icons-png.flaticon.com/512/670/670048.png', 'duration' => null],
        ['name' => 'suncream', 'image' => 'https://cdn-icons-png.flaticon.com/512/2508/2508102.png', 'duration' => 7],
        ['name' => 'underwear', 'image' => 'https://cdn-icons-png.flaticon.com/512/10537/10537467.png', 'duration' => 1],
        ['name' => 'tshirt', 'image' => 'https://cdn-icons-png.flaticon.com/512/892/892458.png', 'duration' => 2],
        ['name' => 'hoodie', 'image' => 'https://cdn-icons-png.flaticon.com/512/343/343389.png', 'duration' => 3],
    ];

    public function load(ObjectManager $manager): void
    {
        foreach(self::ITEMS as $itemData) {
            $item = new Item();
            $item->setName($itemData['name']);
            $item->setImage($itemData['image']);
            $item->setDuration($itemData['duration']);
            $manager->persist($item);
        }

        $manager->flush();
    }
}
