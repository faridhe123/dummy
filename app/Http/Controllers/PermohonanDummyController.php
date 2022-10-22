<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PermohonanDummyController extends Controller
{
    public function cekPermohonan (Request $request) {
        {
            if($request->id == 1)
                return response()->json([
                    'nomor'=>'004/X/Y/2022',
                    'nomor_hp'=>'085290301018',
                    'status'=>'DISETUJUI',
                    'fileurl'=>'#',
                ]);
            else
                return response()->json([
                    'nomor'=>'004/X/Y/2022',
                    'nomor_hp'=>'085290301018',
                    'status'=>'BELUM DISETUJUI',
                    'fileurl'=>'#',
                ]);
        }
    }
}
