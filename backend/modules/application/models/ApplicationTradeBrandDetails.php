<?php

namespace app\modules\application\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

use app\modules\master\models\Product;
use app\modules\master\models\ProductType;
use app\modules\master\models\ProductTypeMaterialComposition;
use app\modules\master\models\Standard;
use app\modules\master\models\StandardLabelGrade;

use app\modules\application\models\ApplicationProductStandard;

class ApplicationTradeBrandDetails extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'tbl_application_trade_brand_details';
    }
    
    public function behaviors()
    {
        return [
            TimestampBehavior::className(),
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at','updated_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
            ],
        ];
    }
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['app_id'], 'integer'],
            //[['wastage'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'app_id' => 'App ID',
            'trade_brand_name' => 'Trade/Brand Name',
        ];
    }
	
	
    
}
