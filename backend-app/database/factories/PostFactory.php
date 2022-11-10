<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'image_path' => $this->faker->image(),
            'title' => $this->faker->title(),
            'content' => $this->faker->text(rand(20,50))
        ];
    }
}
