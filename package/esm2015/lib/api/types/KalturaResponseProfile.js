/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaDetachedResponseProfile } from './KalturaDetachedResponseProfile';
/**
 * @record
 */
export function KalturaResponseProfileArgs() { }
/** @type {?|undefined} */
KalturaResponseProfileArgs.prototype.systemName;
export class KalturaResponseProfile extends KalturaDetachedResponseProfile {
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
            objectType: { type: 'c', default: 'KalturaResponseProfile' },
            id: { type: 'n', readOnly: true },
            systemName: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaResponseProfileStatus, subType: 'KalturaResponseProfileStatus' },
            version: { type: 'n', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaResponseProfile.prototype.id;
    /** @type {?} */
    KalturaResponseProfile.prototype.systemName;
    /** @type {?} */
    KalturaResponseProfile.prototype.partnerId;
    /** @type {?} */
    KalturaResponseProfile.prototype.createdAt;
    /** @type {?} */
    KalturaResponseProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaResponseProfile.prototype.status;
    /** @type {?} */
    KalturaResponseProfile.prototype.version;
}
typesMappingStorage['KalturaResponseProfile'] = KalturaResponseProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVJlc3BvbnNlUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw4QkFBOEIsRUFBc0MsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7OztBQU90SCxNQUFNLDZCQUE4QixTQUFRLDhCQUE4Qjs7OztJQVV0RSxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3RJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZSwgS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVzcG9uc2VQcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGVBcmdzIHtcbiAgICBzeXN0ZW1OYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSBleHRlbmRzIEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzO1xuXHRyZWFkb25seSB2ZXJzaW9uIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZXNwb25zZVByb2ZpbGUnXSA9IEthbHR1cmFSZXNwb25zZVByb2ZpbGU7Il19