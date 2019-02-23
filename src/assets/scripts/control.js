var kirki = kirki || {};
kirki.input = kirki.input || {};
kirki.input.radio = {
    /**
     * Init the control.
     *
     * @since 3.0.17
     * @param {Object} control - The control object.
     * @param {Object} control.id - The setting.
     * @returns {null}
     */
    init: function( control ) {
        var input = jQuery( 'input[data-id="' + control.id + '"]' );

        // Save the value
        input.on( 'change keyup paste click', function() {
            kirki.setting.set( control.id, jQuery( this ).val() );
        } );
    }
}

wp.customize.controlConstructor['kirki-radio-buttonset'] = wp.customize.kirkiDynamicControl.extend( {} );
wp.customize.controlConstructor['kirki-radio-image'] = wp.customize.kirkiDynamicControl.extend( {} );
