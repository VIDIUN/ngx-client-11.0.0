/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailFileSyncType } from './KalturaAuditTrailFileSyncType';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
/**
 * @record
 */
export function KalturaAuditTrailFileSyncCreateInfoArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.objectSubType;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.dc;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.original;
/** @type {?|undefined} */
KalturaAuditTrailFileSyncCreateInfoArgs.prototype.fileType;
export class KalturaAuditTrailFileSyncCreateInfo extends KalturaAuditTrailInfo {
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
            objectType: { type: 'c', default: 'KalturaAuditTrailFileSyncCreateInfo' },
            version: { type: 's' },
            objectSubType: { type: 'n' },
            dc: { type: 'n' },
            original: { type: 'b' },
            fileType: { type: 'en', subTypeConstructor: KalturaAuditTrailFileSyncType, subType: 'KalturaAuditTrailFileSyncType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.version;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.objectSubType;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.dc;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.original;
    /** @type {?} */
    KalturaAuditTrailFileSyncCreateInfo.prototype.fileType;
}
typesMappingStorage['KalturaAuditTrailFileSyncCreateInfo'] = KalturaAuditTrailFileSyncCreateInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNDcmVhdGVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXM0YsTUFBTSwwQ0FBMkMsU0FBUSxxQkFBcUI7Ozs7SUFRMUUsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUNoSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQXVkaXRUcmFpbEZpbGVTeW5jVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbEluZm8sIEthbHR1cmFBdWRpdFRyYWlsSW5mb0FyZ3MgfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsSW5mbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm9BcmdzICBleHRlbmRzIEthbHR1cmFBdWRpdFRyYWlsSW5mb0FyZ3Mge1xuICAgIHZlcnNpb24/IDogc3RyaW5nO1xuXHRvYmplY3RTdWJUeXBlPyA6IG51bWJlcjtcblx0ZGM/IDogbnVtYmVyO1xuXHRvcmlnaW5hbD8gOiBib29sZWFuO1xuXHRmaWxlVHlwZT8gOiBLYWx0dXJhQXVkaXRUcmFpbEZpbGVTeW5jVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm8gZXh0ZW5kcyBLYWx0dXJhQXVkaXRUcmFpbEluZm8ge1xuXG4gICAgdmVyc2lvbiA6IHN0cmluZztcblx0b2JqZWN0U3ViVHlwZSA6IG51bWJlcjtcblx0ZGMgOiBudW1iZXI7XG5cdG9yaWdpbmFsIDogYm9vbGVhbjtcblx0ZmlsZVR5cGUgOiBLYWx0dXJhQXVkaXRUcmFpbEZpbGVTeW5jVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm8nIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0U3ViVHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkYyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvcmlnaW5hbCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRmaWxlVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsRmlsZVN5bmNUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXVkaXRUcmFpbEZpbGVTeW5jQ3JlYXRlSW5mbyddID0gS2FsdHVyYUF1ZGl0VHJhaWxGaWxlU3luY0NyZWF0ZUluZm87Il19