<?php

namespace App\DataFixtures;

use App\Entity\Area;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class AreaFixtures extends Fixture
{
    public const AREAS = ['mer', 'montagne', 'campagne'];
    public function load(ObjectManager $manager): void
    {
        foreach(self::AREAS as $key=>$areaName) {
            $area = new Area();
            $area->setName($areaName);
            $this->addReference('area' . $key, $area);
            $manager->persist($area);
        } 

        $manager->flush();
    }
}
