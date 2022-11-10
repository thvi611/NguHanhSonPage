<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert([
            [
                'name' => 'Văn hóa',
                'detail' => 'Văn hóa là khái niệm mang nội hàm rộng với rất nhiều cách hiểu khác nhau, liên quan đến mọi mặt đời sống vật chất và tinh thần của con người.'
            ],
            [
                'name' => 'Cảnh quan',
                'detail' => 'Cảnh quan hay quang cảnh là tập hợp các cảnh vật, cây cối, 
                            động vật được dựa trên các yếu tố về khí hậu và ảnh hưởng của môi trường hay khí hậu. 
                            Cảnh quan khác nhau tùy thuộc vào môi trường hay khí hậu mỗi nơi.'
            ],
            [
                'name' => 'Lịch sử',
                'detail' => 'Lịch sử hay sử học là một môn khoa học nghiên cứu về quá khứ, đặc biệt là những sự kiện liên quan đến con người[1][2]. 
                            Đây là thuật ngữ chung có liên quan đến các sự kiện trong quá khứ cũng như những ghi nhớ, phát hiện, thu thập, tổ chức, 
                            trình bày, giải thích và thông tin về những sự kiện này. Những học giả viết về lịch sử được gọi là nhà sử học. 
                            Các sự kiện xảy ra trước khi được ghi chép lại được coi là thời tiền sử'
            ]
        ]);
    }
}
