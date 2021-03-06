Ext.override(Rally.ui.chart.Chart,{

    // override to allow for data to be pushed in more complicated objects
    _isData: function(point) {
        if ( point > 0 ) { return true; }
        if ( point && point.y && point.y > 0 ) { return true; }
        return false;
    }
    
});

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
            html: description,
            listeners:{
                collapse: function(){
                    this.up().previousSibling().focus();
                },
                expand: function(){
                    this.up().previousSibling().focus();
                }
            }
            
        });
    },
    
    removeChart: function() {
        var box = this.down('#chart_box');
        box.removeAll();
    },
    
    setChart: function(config) {
        var box = this.down('#chart_box');
        
        this.removeChart();

        var chart_config = Ext.apply({
            xtype:'rallychart',
            loadMask: false,
            chartColors: CA.apps.charts.Colors.getConsistentBarColors()
        }, config);
        
        box.add(chart_config);
    }
});