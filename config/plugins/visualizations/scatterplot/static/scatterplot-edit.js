function scatterplot(a,b,c){function d(){var a={v:{},h:{}};return a.v.lines=p.selectAll("line.v-grid-line").data(m.x.ticks(q.x.fn.ticks()[0])),a.v.lines.enter().append("svg:line").classed("grid-line v-grid-line",!0),a.v.lines.attr("x1",m.x).attr("x2",m.x).attr("y1",0).attr("y2",b.height),a.v.lines.exit().remove(),a.h.lines=p.selectAll("line.h-grid-line").data(m.y.ticks(q.y.fn.ticks()[0])),a.h.lines.enter().append("svg:line").classed("grid-line h-grid-line",!0),a.h.lines.attr("x1",0).attr("x2",b.width).attr("y1",m.y).attr("y2",m.y),a.h.lines.exit().remove(),a}function e(){return t.attr("cx",function(a,b){return m.x(j(a,b))}).attr("cy",function(a,b){return m.y(k(a,b))}).style("display","block").filter(function(){var a=d3.select(this).attr("cx"),c=d3.select(this).attr("cy");return 0>a||a>b.width?!0:0>c||c>b.height?!0:!1}).style("display","none")}function f(){$(".chart-info-box").remove(),q.redraw(),e(),s=d(),$(o.node()).trigger("zoom.scatterplot",{scale:n.scale(),translate:n.translate()})}function g(a,c,d){return c+=8,$(['<div class="chart-info-box" style="position: absolute">',void 0!==b.idColumn?"<div>"+d[b.idColumn]+"</div>":"","<div>",j(d),"</div>","<div>",k(d),"</div>","</div>"].join("")).css({top:a,left:c,"z-index":2})}var h=function(a,b){return"translate("+a+","+b+")"},i=function(a,b,c){return"rotate("+a+","+b+","+c+")"},j=function(a){return a[b.xColumn]},k=function(a){return a[b.yColumn]},l={x:{extent:d3.extent(c,j)},y:{extent:d3.extent(c,k)}},m={x:d3.scale.linear().domain(l.x.extent).range([0,b.width]),y:d3.scale.linear().domain(l.y.extent).range([b.height,0])},n=d3.behavior.zoom().x(m.x).y(m.y).scaleExtent([1,30]).scale(b.scale||1).translate(b.translate||[0,0]),o=d3.select(a).attr("class","scatterplot").attr("width","100%").attr("height",b.height+(b.margin.top+b.margin.bottom)),p=o.append("g").attr("class","content").attr("transform",h(b.margin.left,b.margin.top)).call(n);p.append("rect").attr("class","zoom-rect").attr("width",b.width).attr("height",b.height).style("fill","transparent");var q={x:{},y:{}};q.x.fn=d3.svg.axis().orient("bottom").scale(m.x).ticks(b.xTicks).tickFormat(d3.format("s")),q.y.fn=d3.svg.axis().orient("left").scale(m.y).ticks(b.yTicks).tickFormat(d3.format("s")),q.x.g=p.append("g").attr("class","x axis").attr("transform",h(0,b.height)).call(q.x.fn),q.y.g=p.append("g").attr("class","y axis").call(q.y.fn);var r=6;q.x.label=o.append("text").attr("id","x-axis-label").attr("class","axis-label").text(b.xLabel).attr("text-anchor","middle").attr("dominant-baseline","text-after-edge").attr("x",b.width/2+b.margin.left).attr("y",b.height+b.margin.bottom+b.margin.top-r),q.y.label=o.append("text").attr("id","y-axis-label").attr("class","axis-label").text(b.yLabel).attr("text-anchor","middle").attr("dominant-baseline","text-before-edge").attr("x",r).attr("y",b.height/2).attr("transform",i(-90,r,b.height/2)),q.redraw=function(){o.select(".x.axis").call(q.x.fn),o.select(".y.axis").call(q.y.fn)};var s=d(),t=p.selectAll(".glyph").data(c).enter().append("svg:circle").classed("glyph",!0).attr("cx",function(a,b){return m.x(j(a,b))}).attr("cy",function(a,b){return m.y(k(a,b))}).attr("r",0);t.transition().duration(b.animDuration).attr("r",b.datapointSize),e(),n.on("zoom",f),t.on("mouseover",function(a,c){var d=d3.select(this);d.classed("highlight",!0).style("fill","red").style("fill-opacity",1),p.append("line").attr("stroke","red").attr("stroke-width",1).attr("x1",d.attr("cx")-b.datapointSize).attr("y1",d.attr("cy")).attr("x2",0).attr("y2",d.attr("cy")).classed("hoverline",!0),d.attr("cy")<b.height&&p.append("line").attr("stroke","red").attr("stroke-width",1).attr("x1",d.attr("cx")).attr("y1",+d.attr("cy")+b.datapointSize).attr("x2",d.attr("cx")).attr("y2",b.height).classed("hoverline",!0);var e=this.getBoundingClientRect();$("body").append(g(e.top,e.right,a)),$(o.node()).trigger("mouseover-datapoint.scatterplot",[this,a,c])}),t.on("mouseout",function(){d3.select(this).classed("highlight",!1).style("fill","black").style("fill-opacity",.2),p.selectAll(".hoverline").remove(),$(".chart-info-box").remove()})}this.scatterplot=this.scatterplot||{},this.scatterplot.chartcontrol=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f="function",g=b.helperMissing,h=this.escapeExpression;return'<p class="help-text">\n    Use the following controls to how the chart is displayed.\n    The slide controls can be moved by the mouse or, if the \'handle\' is in focus, your keyboard\'s arrow keys.\n    Move the focus between controls by using the tab or shift+tab keys on your keyboard.\n    Use the \'Draw\' button to render (or re-render) the chart with the current settings.\n</p>\n\n<div data-config-key="datapointSize" class="form-input numeric-slider-input">\n    <label for="datapointSize">Size of data point: </label>\n    <div class="slider-output">'+h((e=null!=(e=b.datapointSize||(null!=a?a.datapointSize:a))?e:g,typeof e===f?e.call(a,{name:"datapointSize",hash:{},data:d}):e))+'</div>\n    <div class="slider"></div>\n    <p class="form-help help-text-small">\n        Size of the graphic representation of each data point\n    </p>\n</div>\n\n<div data-config-key="width" class="form-input numeric-slider-input">\n    <label for="width">Chart width: </label>\n    <div class="slider-output">'+h((e=null!=(e=b.width||(null!=a?a.width:a))?e:g,typeof e===f?e.call(a,{name:"width",hash:{},data:d}):e))+'</div>\n    <div class="slider"></div>\n    <p class="form-help help-text-small">\n        (not including chart margins and axes)\n    </p>\n</div>\n\n<div data-config-key="height" class="form-input numeric-slider-input">\n    <label for="height">Chart height: </label>\n    <div class="slider-output">'+h((e=null!=(e=b.height||(null!=a?a.height:a))?e:g,typeof e===f?e.call(a,{name:"height",hash:{},data:d}):e))+'</div>\n    <div class="slider"></div>\n    <p class="form-help help-text-small">\n        (not including chart margins and axes)\n    </p>\n</div>\n\n<div data-config-key="X-axis-label"class="text-input form-input">\n    <label for="X-axis-label">Re-label the X axis: </label>\n    <input type="text" name="X-axis-label" id="X-axis-label" value="'+h((e=null!=(e=b.xLabel||(null!=a?a.xLabel:a))?e:g,typeof e===f?e.call(a,{name:"xLabel",hash:{},data:d}):e))+'" />\n    <p class="form-help help-text-small"></p>\n</div>\n\n<div data-config-key="Y-axis-label" class="text-input form-input">\n    <label for="Y-axis-label">Re-label the Y axis: </label>\n    <input type="text" name="Y-axis-label" id="Y-axis-label" value="'+h((e=null!=(e=b.yLabel||(null!=a?a.yLabel:a))?e:g,typeof e===f?e.call(a,{name:"yLabel",hash:{},data:d}):e))+'" />\n    <p class="form-help help-text-small"></p>\n</div>\n\n<button class="render-button btn btn-primary active">Draw</button>\n'},useData:!0}),this.scatterplot.datacontrol=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g="function",h=b.helperMissing,i='<p class="help-text">\n    Use the following control to change which columns are used by the chart. Click any cell\n    from the last three rows of the table to select the column for the appropriate data.\n    Use the \'Draw\' button to render (or re-render) the chart with the current settings.\n</p>\n\n<ul class="help-text" style="margin-left: 8px">\n    <li><b>X Column</b>: which column values will be used for the x axis of the chart.</li>\n    <li><b>Y Column</b>: which column values will be used for the y axis of the chart.</li>\n    <li><b>ID Column</b>: an additional column value displayed when the user hovers over a data point.\n    It may be useful to select unique or categorical identifiers here (such as gene ids).\n    </li>\n</ul>\n\n<div class="column-selection">\n    <pre class="peek">';return f=null!=(f=b.peek||(null!=a?a.peek:a))?f:h,e=typeof f===g?f.call(a,{name:"peek",hash:{},data:d}):f,null!=e&&(i+=e),i+'</pre>\n</div>\n\n<p class="help-text help-text-small">\n    <b>Note</b>: If it can be determined from the dataset\'s filetype that a column is not numeric,\n    that column choice may be disabled for either the x or y axis.\n</p>\n\n<button class="render-button btn btn-primary active">Draw</button>\n'},useData:!0}),this.scatterplot.editor=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="scatterplot-editor tabbable tabs-left">\n    <ul class="nav nav-tabs">\n        <li class="active">\n            <a title="Use this tab to change which data are used"\n               href="#data-control" data-toggle="tab">Data Controls</a>\n        </li>\n        <li>\n            <a title="Use this tab to change how the chart is drawn"\n               href="#chart-control" data-toggle="tab" >Chart Controls</a>\n        </li>\n        <li class="disabled">\n            <a title="This tab will display the chart"\n               href="#chart-display" data-toggle="tab">Chart</a>\n        </li>\n        <li class="file-controls">\n<!--            <button class="copy-btn btn btn-default"\n                    title="Save this as a new visualization">Save to new</button>-->\n            <button class="save-btn btn btn-default">Save</button>\n        </li>\n    </ul>\n\n    <div class="tab-content">\n        <div id="data-control" class="scatterplot-config-control tab-pane active">\n        </div>\n    \n        <div id="chart-control" class="scatterplot-config-control tab-pane">\n        </div>\n\n        <div id="chart-display" class="scatterplot-display tab-pane"></div>\n\n    </div>\n</div>\n'},useData:!0});var ScatterplotConfigEditor=Backbone.View.extend({className:"scatterplot-control-form",initialize:function(a){if(this.model||(this.model=new Visualization({type:"scatterplot"})),!a||!a.dataset)throw new Error("ScatterplotConfigEditor requires a dataset");this.dataset=a.dataset,this.display=new ScatterplotDisplay({dataset:a.dataset,model:this.model})},render:function(){this.$el.empty().append(ScatterplotConfigEditor.templates.mainLayout({})),this.model.id&&(this.$el.find(".copy-btn").show(),this.$el.find(".save-btn").text("Update saved")),this.$el.find("[title]").tooltip(),this._render_dataControl(),this._render_chartControls(),this._render_chartDisplay();var a=this.model.get("config");return this.model.id&&_.isFinite(a.xColumn)&&_.isFinite(a.yColumn)&&this.renderChart(),this},_getColumnIndecesByType:function(){var a={numeric:[],text:[],all:[]};return _.each(this.dataset.metadata_column_types||[],function(b,c){"int"===b||"float"===b?a.numeric.push(c):("str"===b||"list"===b)&&a.text.push(c),a.all.push(c)}),a.numeric.length<2&&(a.numeric=[]),a},_render_dataControl:function(a){a=a||this.$el;var b=this,c=this.model.get("config"),d=this._getColumnIndecesByType(),e=a.find(".tab-pane#data-control");return e.html(ScatterplotConfigEditor.templates.dataControl({peek:this.dataset.peek})),e.find(".peek").peekColumnSelector({controls:[{label:"X Column",id:"xColumn",selected:c.xColumn,disabled:d.text},{label:"Y Column",id:"yColumn",selected:c.yColumn,disabled:d.text},{label:"ID Column",id:"idColumn",selected:c.idColumn}]}).on("peek-column-selector.change",function(a,c){b.model.set("config",c)}).on("peek-column-selector.rename",function(){}),e.find("[title]").tooltip(),e},_render_chartControls:function(a){function b(){var a=$(this),b=a.slider("value");c.model.set("config",_.object([[a.parent().data("config-key"),b]])),a.siblings(".slider-output").text(b)}a=a||this.$el;var c=this,d=this.model.get("config"),e=a.find("#chart-control");e.html(ScatterplotConfigEditor.templates.chartControl(d));var f={datapointSize:{min:2,max:10,step:1},width:{min:200,max:800,step:20},height:{min:200,max:800,step:20}};e.find(".numeric-slider-input").each(function(){var a=$(this),c=a.attr("data-config-key"),e=_.extend(f[c],{value:d[c],change:b,slide:b});a.find(".slider").slider(e),a.children(".slider-output").text(d[c])});var g=this.dataset.metadata_column_names||[],h=d.xLabel||g[d.xColumn]||"X",i=d.yLabel||g[d.yColumn]||"Y";return e.find('input[name="X-axis-label"]').val(h).on("change",function(){c.model.set("config",{xLabel:$(this).val()})}),e.find('input[name="Y-axis-label"]').val(i).on("change",function(){c.model.set("config",{yLabel:$(this).val()})}),e.find("[title]").tooltip(),e},_render_chartDisplay:function(a){a=a||this.$el;var b=a.find(".tab-pane#chart-display");return this.display.setElement(b),this.display.render(),b.find("[title]").tooltip(),b},events:{"change #include-id-checkbox":"toggleThirdColumnSelector","click #data-control .render-button":"renderChart","click #chart-control .render-button":"renderChart","click .save-btn":"saveVisualization"},saveVisualization:function(){var a=this;this.model.save().fail(function(b,c,d){console.error(b,c,d),a.trigger("save:error",view),alert("Error loading data:\n"+b.responseText)}).then(function(){a.display.render()})},toggleThirdColumnSelector:function(){this.$el.find('select[name="idColumn"]').parent().toggle()},renderChart:function(){this.$el.find(".nav li.disabled").removeClass("disabled"),this.$el.find("ul.nav").find('a[href="#chart-display"]').tab("show"),this.display.fetchData()},toString:function(){return"ScatterplotConfigEditor("+(this.dataset?this.dataset.id:"")+")"}});ScatterplotConfigEditor.templates={mainLayout:scatterplot.editor,dataControl:scatterplot.datacontrol,chartControl:scatterplot.chartcontrol};var ScatterplotDisplay=Backbone.View.extend({initialize:function(a){this.data=null,this.dataset=a.dataset,this.lineCount=this.dataset.metadata_data_lines||null},fetchData:function(){this.showLoadingIndicator();var a=this,b=this.model.get("config"),c=jQuery.getJSON(((typeof parent.galaxy_config.root == 'undefined') ? '/' : parent.galaxy_config.root)+"api/datasets/"+this.dataset.id,{data_type:"raw_data",provider:"dataset-column",limit:b.pagination.perPage,offset:b.pagination.currPage*b.pagination.perPage});return c.done(function(b){a.data=b.data,a.trigger("data:fetched",a),a.renderData()}),c.fail(function(b,c,d){console.error(b,c,d),a.trigger("data:error",a),alert("Error loading data:\n"+b.responseText)}),c},showLoadingIndicator:function(){this.$el.find(".scatterplot-data-info").html(['<div class="loading-indicator">','<span class="fa fa-spinner fa-spin"></span>','<span class="loading-indicator-message">loading...</span>',"</div>"].join(""))},template:function(){var a=['<div class="controls clear">','<div class="right">','<p class="scatterplot-data-info"></p>','<button class="stats-toggle-btn">Stats</button>','<button class="rerender-btn">Redraw</button>',"</div>",'<div class="left">','<div class="page-control"></div>',"</div>","</div>","<svg/>",'<div class="stats-display"></div>'].join("");return a},render:function(){return this.$el.addClass("scatterplot-display").html(this.template()),this.data&&this.renderData(),this},renderData:function(){this.renderLeftControls(),this.renderRightControls(),this.renderPlot(this.data),this.getStats()},renderLeftControls:function(){var a=this,b=this.model.get("config");return this.$el.find(".controls .left .page-control").pagination({startingPage:b.pagination.currPage,perPage:b.pagination.perPage,totalDataSize:this.lineCount,currDataSize:this.data.length}).off().on("pagination.page-change",function(c,d){b.pagination.currPage=d,a.model.set("config",{pagination:b.pagination}),a.resetZoom(),a.fetchData()}),this},renderRightControls:function(){var a=this;this.setLineInfo(this.data),this.$el.find(".stats-toggle-btn").off().click(function(){a.toggleStats()}),this.$el.find(".rerender-btn").off().click(function(){a.resetZoom(),a.renderPlot(this.data)})},renderPlot:function(){var a=this,b=this.$el.find("svg");this.toggleStats(!1),b.off().empty().show().on("zoom.scatterplot",function(b,c){a.model.set("config",c)}),scatterplot(b.get(0),this.model.get("config"),this.data)},setLineInfo:function(a,b){if(a){var c=this.model.get("config"),d=this.lineCount||"an unknown total",e=c.pagination.currPage*c.pagination.perPage,f=e+a.length;this.$el.find(".controls p.scatterplot-data-info").text([e+1,"to",f,"of",d].join(" "))}else this.$el.find(".controls p.scatterplot-data-info").html(b||"");return this},resetZoom:function(a,b){return a=void 0!==a?a:1,b=void 0!==b?b:[0,0],this.model.set("config",{scale:a,translate:b}),this},getStats:function(){if(this.data){var a=this,b=this.model.get("config"),c=new Worker("/plugins/visualizations/scatterplot/static/worker-stats.js");c.postMessage({data:this.data,keys:[b.xColumn,b.yColumn]}),c.onerror=function(){c.terminate()},c.onmessage=function(b){a.renderStats(b.data)}}},renderStats:function(a){var b=this.model.get("config"),c=this.$el.find(".stats-display"),d=b.xLabel,e=b.yLabel,f=$("<table/>").addClass("table").append(["<thead><th></th><th>",d,"</th><th>",e,"</th></thead>"].join("")).append(_.map(a,function(a,b){return $(["<tr><td>",b,"</td><td>",a[0],"</td><td>",a[1],"</td></tr>"].join(""))}));c.empty().append(f)},toggleStats:function(a){var b=this.$el.find(".stats-display");a=void 0===a?b.is(":hidden"):a,a?(this.$el.find("svg").hide(),b.show(),this.$el.find(".controls .stats-toggle-btn").text("Plot")):(b.hide(),this.$el.find("svg").show(),this.$el.find(".controls .stats-toggle-btn").text("Stats"))},toString:function(){return"ScatterplotView()"}}),ScatterplotModel=Visualization.extend({defaults:{type:"scatterplot",config:{pagination:{currPage:0,perPage:3e3},width:400,height:400,margin:{top:16,right:16,bottom:40,left:54},xTicks:10,xLabel:"X",yTicks:10,yLabel:"Y",datapointSize:4,animDuration:500,scale:1,translate:[0,0]}}});
