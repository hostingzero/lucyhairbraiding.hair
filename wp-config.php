<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u756016664_tS5Co' );

/** Database username */
define( 'DB_USER', 'u756016664_5lPew' );

/** Database password */
define( 'DB_PASSWORD', '7zshAZVkxG' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'sxo[[ s&3Qbu)-2:$DYJ{6O@`>QaWE<|5t~d|.O ~ET9W&?a*Hpo=Fy/N[}p1$P;' );
define( 'SECURE_AUTH_KEY',   'ha+,)0Qe7fV;p30oZP#6~JfgEh=y|H{yD{#?LBoXI=DE_^DkqLsG_zOa$+/m@7va' );
define( 'LOGGED_IN_KEY',     'IE4y1e=z)|~%K1/O*y(2ReDo:6W|^J2mN4k$TUTy{F<&DA{m?==e|sCTk21l0w]I' );
define( 'NONCE_KEY',         'uiNBQ,eB{Waxqu~Uf0n[Z;yU2gv3 >4zR7~9|aORo#6C<Gy:;|V>{+[-QF|9]Fk`' );
define( 'AUTH_SALT',         'J`$ h`mu+)5LOIbNJzqQJ^%R^-9l#@d+F=]KC7B$-yODv^|g])Y`VVrF/UJ(:}E/' );
define( 'SECURE_AUTH_SALT',  ' ..>QMi*1+Nqc^br:}3u00aVR|?>4dcQcs@qa<CufLP}BIh_4336q#+8]`h[M2`*' );
define( 'LOGGED_IN_SALT',    '*5,H_8Qll?|JVLG#|dc5^`:l;i(A_T,j :S9dr@T}(4+lF<)Ma5Dd|ckKp;Q6rL/' );
define( 'NONCE_SALT',        'ysG/nMWFs=3QG;9*UF&!<EA[?QGP2uc8SOnIEY ;uF2xaOgA=1A`$T;lk5I,4R~a' );
define( 'WP_CACHE_KEY_SALT', '<hBd.4kvFm@OZ=&w [T4Emi2:QE/3B7^7{B?>Nr&Cx4jkb_7OXer/jdaXi:rAQiK' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
