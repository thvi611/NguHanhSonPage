<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
    ];

    /**
     * Get the comments for the blog post.
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    
    /**
     * The posts that belong to the category .
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * Get all of the post's images.
     */
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
