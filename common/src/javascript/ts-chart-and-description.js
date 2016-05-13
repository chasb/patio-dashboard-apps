Ext.define('CA.techservices.container.ChartWithDescription',{
    extend: 'Ext.container.Container',
    alias:  'widget.tschartwithdescription',
    
    layout: 'hbox',
    
    items: [
        {xtype:'container', itemId:'chart_box', flex: 1},
        {xtype:'container', itemId:'description_box'}
    ],
    
    setDescription: function(description) {
        var box = this.down('#description_box');
        box.removeAll();
        
        if ( Ext.isEmpty(description) ) {
            return;
        }
        box.add({
            xtype:'panel',
            ui: 'info-box',
            title: '<span class="icon-info-circle"> </span>',
            collapsible: true,
            collapsed: true,
            collapseDirection: 'right',
            headerPosition: 'left',
            width: 375,
            height: 375,
            margin: 5,
            overflowY: 'auto',
            html: description
            
        });
    },
    
    setChart: function(config) {
        var box = this.down('#chart_box');
        box.removeAll();
        
        
        var chart_config = Ext.apply({
            xtype:'rallychart',
            loadMask: false,
            chartColors: CA.apps.charts.Colors.getConsistentBarColors()
        }, config);
        
        box.add(chart_config);
    }
});