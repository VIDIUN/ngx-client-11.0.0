/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaStreamContainerArgs() { }
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.type;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.trackIndex;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.language;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.channelIndex;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.label;
/** @type {?|undefined} */
KalturaStreamContainerArgs.prototype.channelLayout;
var KalturaStreamContainer = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStreamContainer, _super);
    function KalturaStreamContainer(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStreamContainer.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaStreamContainer' },
            type: { type: 's' },
            trackIndex: { type: 'n' },
            language: { type: 's' },
            channelIndex: { type: 'n' },
            label: { type: 's' },
            channelLayout: { type: 's' }
        });
        return result;
    };
    return KalturaStreamContainer;
}(KalturaObjectBase));
export { KalturaStreamContainer };
if (false) {
    /** @type {?} */
    KalturaStreamContainer.prototype.type;
    /** @type {?} */
    KalturaStreamContainer.prototype.trackIndex;
    /** @type {?} */
    KalturaStreamContainer.prototype.language;
    /** @type {?} */
    KalturaStreamContainer.prototype.channelIndex;
    /** @type {?} */
    KalturaStreamContainer.prototype.label;
    /** @type {?} */
    KalturaStreamContainer.prototype.channelLayout;
}
typesMappingStorage['KalturaStreamContainer'] = KalturaStreamContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0cmVhbUNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN0cmVhbUNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxGLElBQUE7SUFBNEMsa0RBQWlCO0lBU3pELGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0E1Q0w7RUFjNEMsaUJBQWlCLEVBK0I1RCxDQUFBO0FBL0JELGtDQStCQzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN0cmVhbUNvbnRhaW5lckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB0eXBlPyA6IHN0cmluZztcblx0dHJhY2tJbmRleD8gOiBudW1iZXI7XG5cdGxhbmd1YWdlPyA6IHN0cmluZztcblx0Y2hhbm5lbEluZGV4PyA6IG51bWJlcjtcblx0bGFiZWw/IDogc3RyaW5nO1xuXHRjaGFubmVsTGF5b3V0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN0cmVhbUNvbnRhaW5lciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHR5cGUgOiBzdHJpbmc7XG5cdHRyYWNrSW5kZXggOiBudW1iZXI7XG5cdGxhbmd1YWdlIDogc3RyaW5nO1xuXHRjaGFubmVsSW5kZXggOiBudW1iZXI7XG5cdGxhYmVsIDogc3RyaW5nO1xuXHRjaGFubmVsTGF5b3V0IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3RyZWFtQ29udGFpbmVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTdHJlYW1Db250YWluZXInIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHJhY2tJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFiZWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbExheW91dCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RyZWFtQ29udGFpbmVyJ10gPSBLYWx0dXJhU3RyZWFtQ29udGFpbmVyOyJdfQ==