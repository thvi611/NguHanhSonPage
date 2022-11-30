<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GuideFactory extends Factory
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
            'title' => $this->faker->text(rand(15,40)),
            'content' => $this->faker->text(rand(200,500))
        ];
    }
}
