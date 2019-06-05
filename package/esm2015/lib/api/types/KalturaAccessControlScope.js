/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControlContextTypeHolder } from './KalturaAccessControlContextTypeHolder';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAccessControlScopeArgs() { }
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.referrer;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.ip;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.ks;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.userAgent;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.time;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.contexts;
/** @type {?|undefined} */
KalturaAccessControlScopeArgs.prototype.hashes;
export class KalturaAccessControlScope extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.contexts === 'undefined')
            this.contexts = [];
        if (typeof this.hashes === 'undefined')
            this.hashes = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlScope' },
            referrer: { type: 's' },
            ip: { type: 's' },
            ks: { type: 's' },
            userAgent: { type: 's' },
            time: { type: 'n' },
            contexts: { type: 'a', subTypeConstructor: KalturaAccessControlContextTypeHolder, subType: 'KalturaAccessControlContextTypeHolder' },
            hashes: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAccessControlScope.prototype.referrer;
    /** @type {?} */
    KalturaAccessControlScope.prototype.ip;
    /** @type {?} */
    KalturaAccessControlScope.prototype.ks;
    /** @type {?} */
    KalturaAccessControlScope.prototype.userAgent;
    /** @type {?} */
    KalturaAccessControlScope.prototype.time;
    /** @type {?} */
    KalturaAccessControlScope.prototype.contexts;
    /** @type {?} */
    KalturaAccessControlScope.prototype.hashes;
}
typesMappingStorage['KalturaAccessControlScope'] = KalturaAccessControlScope;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEYsTUFBTSxnQ0FBaUMsU0FBUSxpQkFBaUI7Ozs7SUFVNUQsWUFBWSxJQUFxQztRQUU3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ3REOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQ0FBcUMsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDeEksTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ2pGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBY2Nlc3NDb250cm9sQ29udGV4dFR5cGVIb2xkZXIgfSBmcm9tICcuL0thbHR1cmFBY2Nlc3NDb250cm9sQ29udGV4dFR5cGVIb2xkZXInO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sU2NvcGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcmVmZXJyZXI/IDogc3RyaW5nO1xuXHRpcD8gOiBzdHJpbmc7XG5cdGtzPyA6IHN0cmluZztcblx0dXNlckFnZW50PyA6IHN0cmluZztcblx0dGltZT8gOiBudW1iZXI7XG5cdGNvbnRleHRzPyA6IEthbHR1cmFBY2Nlc3NDb250cm9sQ29udGV4dFR5cGVIb2xkZXJbXTtcblx0aGFzaGVzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVmZXJyZXIgOiBzdHJpbmc7XG5cdGlwIDogc3RyaW5nO1xuXHRrcyA6IHN0cmluZztcblx0dXNlckFnZW50IDogc3RyaW5nO1xuXHR0aW1lIDogbnVtYmVyO1xuXHRjb250ZXh0cyA6IEthbHR1cmFBY2Nlc3NDb250cm9sQ29udGV4dFR5cGVIb2xkZXJbXTtcblx0aGFzaGVzIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBY2Nlc3NDb250cm9sU2NvcGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZXh0cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29udGV4dHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuaGFzaGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5oYXNoZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlJyB9LFxuXHRcdFx0XHRyZWZlcnJlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpcCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRrcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VyQWdlbnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb250ZXh0cyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xDb250ZXh0VHlwZUhvbGRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbENvbnRleHRUeXBlSG9sZGVyJyB9LFxuXHRcdFx0XHRoYXNoZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sU2NvcGUnXSA9IEthbHR1cmFBY2Nlc3NDb250cm9sU2NvcGU7Il19