<?php
namespace app\modules\master\controllers;

use Yii;
use app\modules\master\models\FscStandard;
use app\modules\master\models\FscSubStandard;
use yii\web\NotFoundHttpException;

use sizeg\jwt\Jwt;
use sizeg\jwt\JwtHttpBearerAuth;

class FscSubStandardController extends \yii\rest\Controller
{
    /**
     * {@inheritdoc}
     */

    public function behaviors()
    {

        return [
			[
				'class' => \yii\filters\ContentNegotiator::className(),
				//'only' => ['index', 'view'],
				'formats' => [
					'application/json' => \yii\web\Response::FORMAT_JSON,
				],
            ],
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
			],
			'authenticator' => ['class' => JwtHttpBearerAuth::class,
				'optional' => [
					'index'
				]
			]
		];        
    }

    public function actionGetFscSubStandard()
    {
        $stds = FscSubStandard::find()->select(['id','name'])->where(['status'=>0])->asArray()->all();
		return ['standards'=>$stds];

    }
}
