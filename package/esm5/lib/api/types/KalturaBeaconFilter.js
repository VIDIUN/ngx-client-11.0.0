/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconIndexType } from './KalturaBeaconIndexType';
import { KalturaBeaconBaseFilter } from './KalturaBeaconBaseFilter';
/**
 * @record
 */
export function KalturaBeaconFilterArgs() { }
/** @type {?|undefined} */
KalturaBeaconFilterArgs.prototype.indexTypeEqual;
var KalturaBeaconFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBeaconFilter, _super);
    function KalturaBeaconFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBeaconFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBeaconFilter' },
            indexTypeEqual: { type: 'es', subTypeConstructor: KalturaBeaconIndexType, subType: 'KalturaBeaconIndexType' }
        });
        return result;
    };
    return KalturaBeaconFilter;
}(KalturaBeaconBaseFilter));
export { KalturaBeaconFilter };
if (false) {
    /** @type {?} */
    KalturaBeaconFilter.prototype.indexTypeEqual;
}
typesMappingStorage['KalturaBeaconFilter'] = KalturaBeaconFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJlYWNvbkZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJlYWNvbkZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFPakcsSUFBQTtJQUF5QywrQ0FBdUI7SUFJNUQsNkJBQVksSUFBK0I7ZUFFdkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN4RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhCQTlCTDtFQVV5Qyx1QkFBdUIsRUFxQi9ELENBQUE7QUFyQkQsK0JBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJlYWNvbkluZGV4VHlwZSB9IGZyb20gJy4vS2FsdHVyYUJlYWNvbkluZGV4VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmVhY29uQmFzZUZpbHRlciwgS2FsdHVyYUJlYWNvbkJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmVhY29uQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJlYWNvbkZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJlYWNvbkJhc2VGaWx0ZXJBcmdzIHtcbiAgICBpbmRleFR5cGVFcXVhbD8gOiBLYWx0dXJhQmVhY29uSW5kZXhUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQmVhY29uRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUJlYWNvbkJhc2VGaWx0ZXIge1xuXG4gICAgaW5kZXhUeXBlRXF1YWwgOiBLYWx0dXJhQmVhY29uSW5kZXhUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmVhY29uRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCZWFjb25GaWx0ZXInIH0sXG5cdFx0XHRcdGluZGV4VHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJlYWNvbkluZGV4VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmVhY29uSW5kZXhUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQmVhY29uRmlsdGVyJ10gPSBLYWx0dXJhQmVhY29uRmlsdGVyOyJdfQ==