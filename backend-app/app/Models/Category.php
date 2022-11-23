<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'detail'
    ];

    /**
     * The categories that belong to the post.
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

    /**
     * Get all of the category's images.
     */
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

}
