/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCEErrorArgs() { }
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.browser;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.serverIp;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.serverOs;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.phpVersion;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.ceAdminEmail;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.type;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.description;
/** @type {?|undefined} */
KalturaCEErrorArgs.prototype.data;
export class KalturaCEError extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaCEError' },
            id: { type: 's', readOnly: true },
            partnerId: { type: 'n' },
            browser: { type: 's' },
            serverIp: { type: 's' },
            serverOs: { type: 's' },
            phpVersion: { type: 's' },
            ceAdminEmail: { type: 's' },
            type: { type: 's' },
            description: { type: 's' },
            data: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCEError.prototype.id;
    /** @type {?} */
    KalturaCEError.prototype.partnerId;
    /** @type {?} */
    KalturaCEError.prototype.browser;
    /** @type {?} */
    KalturaCEError.prototype.serverIp;
    /** @type {?} */
    KalturaCEError.prototype.serverOs;
    /** @type {?} */
    KalturaCEError.prototype.phpVersion;
    /** @type {?} */
    KalturaCEError.prototype.ceAdminEmail;
    /** @type {?} */
    KalturaCEError.prototype.type;
    /** @type {?} */
    KalturaCEError.prototype.description;
    /** @type {?} */
    KalturaCEError.prototype.data;
}
typesMappingStorage['KalturaCEError'] = KalturaCEError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNFRXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDRUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVsRixNQUFNLHFCQUFzQixTQUFRLGlCQUFpQjs7OztJQWFqRCxZQUFZLElBQTBCO1FBRWxDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNuRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDRUVycm9yQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGJyb3dzZXI/IDogc3RyaW5nO1xuXHRzZXJ2ZXJJcD8gOiBzdHJpbmc7XG5cdHNlcnZlck9zPyA6IHN0cmluZztcblx0cGhwVmVyc2lvbj8gOiBzdHJpbmc7XG5cdGNlQWRtaW5FbWFpbD8gOiBzdHJpbmc7XG5cdHR5cGU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGRhdGE/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ0VFcnJvciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogc3RyaW5nO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGJyb3dzZXIgOiBzdHJpbmc7XG5cdHNlcnZlcklwIDogc3RyaW5nO1xuXHRzZXJ2ZXJPcyA6IHN0cmluZztcblx0cGhwVmVyc2lvbiA6IHN0cmluZztcblx0Y2VBZG1pbkVtYWlsIDogc3RyaW5nO1xuXHR0eXBlIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0ZGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNFRXJyb3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNFRXJyb3InIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJyb3dzZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmVySXAgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmVyT3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGhwVmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjZUFkbWluRW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDRUVycm9yJ10gPSBLYWx0dXJhQ0VFcnJvcjsiXX0=