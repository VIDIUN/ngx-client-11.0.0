/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaRequestConfigurationArgs() { }
/** @type {?|undefined} */
KalturaRequestConfigurationArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaRequestConfigurationArgs.prototype.ks;
/** @type {?|undefined} */
KalturaRequestConfigurationArgs.prototype.responseProfile;
var KalturaRequestConfiguration = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRequestConfiguration, _super);
    function KalturaRequestConfiguration(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRequestConfiguration.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRequestConfiguration' },
            partnerId: { type: 'n' },
            ks: { type: 's' },
            responseProfile: { type: 'o', subTypeConstructor: KalturaBaseResponseProfile, subType: 'KalturaBaseResponseProfile' }
        });
        return result;
    };
    return KalturaRequestConfiguration;
}(KalturaObjectBase));
export { KalturaRequestConfiguration };
if (false) {
    /** @type {?} */
    KalturaRequestConfiguration.prototype.partnerId;
    /** @type {?} */
    KalturaRequestConfiguration.prototype.ks;
    /** @type {?} */
    KalturaRequestConfiguration.prototype.responseProfile;
}
typesMappingStorage['KalturaRequestConfiguration'] = KalturaRequestConfiguration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlcXVlc3RDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVxdWVzdENvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQWlELHVEQUFpQjtJQU05RCxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUNoSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQXBDTDtFQVlpRCxpQkFBaUIsRUF5QmpFLENBQUE7QUF6QkQsdUNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlcXVlc3RDb25maWd1cmF0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGtzPyA6IHN0cmluZztcblx0cmVzcG9uc2VQcm9maWxlPyA6IEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVxdWVzdENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGtzIDogc3RyaW5nO1xuXHRyZXNwb25zZVByb2ZpbGUgOiBLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlcXVlc3RDb25maWd1cmF0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZXF1ZXN0Q29uZmlndXJhdGlvbicgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGtzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc3BvbnNlUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZXF1ZXN0Q29uZmlndXJhdGlvbiddID0gS2FsdHVyYVJlcXVlc3RDb25maWd1cmF0aW9uOyJdfQ==