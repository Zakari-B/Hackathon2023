<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use App\State\SearchProcessor;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ItemRepository;
use ApiPlatform\Metadata\ApiFilter;
use App\State\ItemQuantityProvider;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ItemRepository::class)]

#[ApiFilter(OrderFilter::class)]
#[ApiResource(
    operations: [
        new Get(
            provider: ItemQuantityProvider::class
        ),
        new GetCollection(
            // processor: SearchProcessor::class
        )
    ]
)]
class Item
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Assert\Length(max: 255)]
    #[Assert\NotBlank]
    private ?string $image = null;

    #[ORM\Column(nullable: true)]
    #[Assert\Positive()]
    private ?float $duration = null;

    #[Assert\Positive()]
    private ?int $quantity = null;

    #[ORM\ManyToOne(inversedBy: 'items')]
    private ?Area $area = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getDuration(): ?float
    {
        return $this->duration;
    }

    public function setDuration(?float $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    /**
     * Get the value of quantity
     */
    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    /**
     * Set the value of quantity
     */
    public function setQuantity(?int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getArea(): ?Area
    {
        return $this->area;
    }

    public function setArea(?Area $area): self
    {
        $this->area = $area;

        return $this;
    }
}
