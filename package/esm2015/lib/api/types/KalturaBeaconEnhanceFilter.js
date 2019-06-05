/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconIndexType } from './KalturaBeaconIndexType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaBeaconEnhanceFilterArgs() { }
/** @type {?|undefined} */
KalturaBeaconEnhanceFilterArgs.prototype.externalElasticQueryObject;
/** @type {?|undefined} */
KalturaBeaconEnhanceFilterArgs.prototype.indexTypeEqual;
export class KalturaBeaconEnhanceFilter extends KalturaFilter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBeaconEnhanceFilter' },
            externalElasticQueryObject: { type: 's' },
            indexTypeEqual: { type: 'es', subTypeConstructor: KalturaBeaconIndexType, subType: 'KalturaBeaconIndexType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBeaconEnhanceFilter.prototype.externalElasticQueryObject;
    /** @type {?} */
    KalturaBeaconEnhanceFilter.prototype.indexTypeEqual;
}
typesMappingStorage['KalturaBeaconEnhanceFilter'] = KalturaBeaconEnhanceFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJlYWNvbkVuaGFuY2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCZWFjb25FbmhhbmNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7O0FBUW5FLE1BQU0saUNBQWtDLFNBQVEsYUFBYTs7OztJQUt6RCxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSwwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDeEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmVhY29uSW5kZXhUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQmVhY29uSW5kZXhUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQmVhY29uRW5oYW5jZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGV4dGVybmFsRWxhc3RpY1F1ZXJ5T2JqZWN0PyA6IHN0cmluZztcblx0aW5kZXhUeXBlRXF1YWw/IDogS2FsdHVyYUJlYWNvbkluZGV4VHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJlYWNvbkVuaGFuY2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGV4dGVybmFsRWxhc3RpY1F1ZXJ5T2JqZWN0IDogc3RyaW5nO1xuXHRpbmRleFR5cGVFcXVhbCA6IEthbHR1cmFCZWFjb25JbmRleFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCZWFjb25FbmhhbmNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCZWFjb25FbmhhbmNlRmlsdGVyJyB9LFxuXHRcdFx0XHRleHRlcm5hbEVsYXN0aWNRdWVyeU9iamVjdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbmRleFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCZWFjb25JbmRleFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJlYWNvbkluZGV4VHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJlYWNvbkVuaGFuY2VGaWx0ZXInXSA9IEthbHR1cmFCZWFjb25FbmhhbmNlRmlsdGVyOyJdfQ==