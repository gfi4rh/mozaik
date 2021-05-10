import ComponentRegistry from './component-registry';
import ApiConsumerMixin  from './mixins/ApiConsumerMixin';
import ApiStore          from './stores/ApiStore';
import DashboardStore from './stores/DashboardStore';
import ApiActions        from './actions/ApiActions';
import DashboardActions from './actions/DashboardActions';
import ConfigActions     from './actions/ConfigActions';
import MozaikComponent   from './components/Mozaik.jsx';
import PieComponent      from './components/charts/Pie.jsx';
import GaugeComponent    from './components/charts/Gauge.jsx';
import TreemapComponent  from './components/charts/Treemap.jsx';
import BarChartComponent from './components/charts/BarChart.jsx';
import ProgressBarComponent from './components/charts/ProgressBar.jsx';
import GraphicComponent from './components/charts/Graphic.jsx';
import Inspector         from './components/Inspector.jsx';



ComponentRegistry.add('mozaik.inspector', Inspector);


export default {
    Registry: ComponentRegistry,
    Mixin:    {
        ApiConsumer: ApiConsumerMixin
    },
    Store: {
        Api: ApiStore,
        Dashboard : DashboardStore
    },
    Actions: {
        Api:    ApiActions,
        Config: ConfigActions,
        Dashboard : DashboardActions
    },
    Component: {
        Mozaik:   MozaikComponent,
        Pie:      PieComponent,
        Gauge:    GaugeComponent,
        Treemap:  TreemapComponent,
        BarChart: BarChartComponent,
        ProgressBar: ProgressBarComponent,
        Graphic: GraphicComponent
    }
};
