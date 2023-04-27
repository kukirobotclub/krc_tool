/*
 * PXT for KRC Microbit Control Bord
 * Copyright 2023 Bitcom K.Kurita
 *                GNU
 * 
 * Version 2023-04-27 0.00
 * 
 * ブロック入出力を共通化して、入力と出力を結合すれば、ロボットが動く
 * 入力											出力
 * コントロールパッド━┓                    ┏━━モーター
 * EEP-ROM   ━━━━━┫                    ┃
 * BLE通信   ━━━━━╋━共通フォーマット━┻━━EEP-ROM
 * シリアル入力  ━━━┫　mot_dat　opt_dat
 * 赤外線リモコン受信━┛
 * 
 */
