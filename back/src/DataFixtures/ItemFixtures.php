<?php

namespace App\DataFixtures;

use App\Entity\Item;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ItemFixtures extends Fixture implements DependentFixtureInterface
{
    public const ITEMS = [
        ['name' => 'ID', 'image' => 'https://cdn-icons-png.flaticon.com/512/1726/1726620.png', 'duration' => null],
        ['name' => 'sunglasses', 'image' => 'https://cdn-icons-png.flaticon.com/512/670/670048.png', 'duration' => null],
        ['name' => 'sunscreen', 'image' => 'https://cdn-icons-png.flaticon.com/512/2508/2508102.png', 'duration' => 7],
        ['name' => 'underwear', 'image' => 'https://cdn-icons-png.flaticon.com/512/10537/10537467.png', 'duration' => 1],
        ['name' => 'socks', 'image' => 'https://cdn-icons-png.flaticon.com/512/4507/4507839.png', 'duration' => 1],
        ['name' => 'tshirt', 'image' => 'https://cdn-icons-png.flaticon.com/512/892/892458.png', 'duration' => 2],
        ['name' => 'hoodie', 'image' => 'https://cdn-icons-png.flaticon.com/512/343/343389.png', 'duration' => 3],
        ['name' => 'pants', 'image' => 'https://cdn-icons-png.flaticon.com/512/599/599580.png', 'duration' => 3],
        ['name' => 'plastic duck', 'image' => 'https://cdn-icons-png.flaticon.com/512/3713/3713286.png', 'duration' => null],
        ['name' => 'boomerang', 'image' => 'https://cdn-icons-png.flaticon.com/512/8572/8572217.png', 'duration' => null],
        ['name' => 'nintendo 3DS', 'image' => 'https://cdn-icons-png.flaticon.com/512/1373/1373601.png', 'duration' => null],
        ['name' => 'wallet', 'image' => 'https://cdn-icons-png.flaticon.com/512/5206/5206347.png', 'duration' => null],
        ['name' => 'volley ball', 'image' => 'https://cdn-icons-png.flaticon.com/512/4841/4841005.png', 'duration' => null],
        ['name' => 'book', 'image' => 'https://cdn-icons-png.flaticon.com/512/10554/10554426.png', 'duration' => null],
        ['name' => 'phone', 'image' => 'https://cdn-icons-png.flaticon.com/512/3617/3617011.png', 'duration' => null],
        ['name' => 'condoms', 'image' => 'https://cdn-icons-png.flaticon.com/512/9463/9463247.png', 'duration' => null],
        ['name' => 'guitar', 'image' => 'https://cdn-icons-png.flaticon.com/512/2265/2265168.png', 'duration' => null],

    ];

    public function load(ObjectManager $manager): void
    {
        foreach (self::ITEMS as $key => $itemData) {
            $item = new Item();
            $item->setName($itemData['name']);
            $item->setImage($itemData['image']);
            $item->setArea($this->getReference('area' . $key % 3));
            $item->setDuration($itemData['duration']);
            $manager->persist($item);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            AreaFixtures::class,
        ];
    }
}
