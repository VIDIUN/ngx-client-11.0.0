/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
/**
 * @record
 */
export function KalturaLiveAssetArgs() { }
/** @type {?|undefined} */
KalturaLiveAssetArgs.prototype.multicastIP;
/** @type {?|undefined} */
KalturaLiveAssetArgs.prototype.multicastPort;
var KalturaLiveAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveAsset, _super);
    function KalturaLiveAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveAsset' },
            multicastIP: { type: 's' },
            multicastPort: { type: 'n' }
        });
        return result;
    };
    return KalturaLiveAsset;
}(KalturaFlavorAsset));
export { KalturaLiveAsset };
if (false) {
    /** @type {?} */
    KalturaLiveAsset.prototype.multicastIP;
    /** @type {?} */
    KalturaLiveAsset.prototype.multicastPort;
}
typesMappingStorage['KalturaLiveAsset'] = KalturaLiveAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7OztBQVFsRixJQUFBO0lBQXNDLDRDQUFrQjtJQUtwRCwwQkFBWSxJQUE0QjtlQUVwQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJCQWhDTDtFQVVzQyxrQkFBa0IsRUF1QnZELENBQUE7QUF2QkQsNEJBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yQXNzZXQsIEthbHR1cmFGbGF2b3JBc3NldEFyZ3MgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JBc3NldCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVBc3NldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZsYXZvckFzc2V0QXJncyB7XG4gICAgbXVsdGljYXN0SVA/IDogc3RyaW5nO1xuXHRtdWx0aWNhc3RQb3J0PyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVBc3NldCBleHRlbmRzIEthbHR1cmFGbGF2b3JBc3NldCB7XG5cbiAgICBtdWx0aWNhc3RJUCA6IHN0cmluZztcblx0bXVsdGljYXN0UG9ydCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZUFzc2V0JyB9LFxuXHRcdFx0XHRtdWx0aWNhc3RJUCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtdWx0aWNhc3RQb3J0IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlQXNzZXQnXSA9IEthbHR1cmFMaXZlQXNzZXQ7Il19