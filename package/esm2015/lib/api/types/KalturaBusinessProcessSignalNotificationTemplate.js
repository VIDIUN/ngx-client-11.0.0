/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplate } from './KalturaBusinessProcessNotificationTemplate';
/**
 * @record
 */
export function KalturaBusinessProcessSignalNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessSignalNotificationTemplateArgs.prototype.message;
/** @type {?|undefined} */
KalturaBusinessProcessSignalNotificationTemplateArgs.prototype.eventId;
export class KalturaBusinessProcessSignalNotificationTemplate extends KalturaBusinessProcessNotificationTemplate {
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
            objectType: { type: 'c', default: 'KalturaBusinessProcessSignalNotificationTemplate' },
            message: { type: 's' },
            eventId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBusinessProcessSignalNotificationTemplate.prototype.message;
    /** @type {?} */
    KalturaBusinessProcessSignalNotificationTemplate.prototype.eventId;
}
typesMappingStorage['KalturaBusinessProcessSignalNotificationTemplate'] = KalturaBusinessProcessSignalNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NpZ25hbE5vdGlmaWNhdGlvblRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2lnbmFsTm90aWZpY2F0aW9uVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMENBQTBDLEVBQWtELE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7OztBQVExSixNQUFNLHVEQUF3RCxTQUFRLDBDQUEwQzs7OztJQUs1RyxZQUFZLElBQTREO1FBRXBFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrREFBa0QsRUFBRTtZQUNyRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrREFBa0QsQ0FBQyxHQUFHLGdEQUFnRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZSwgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2lnbmFsTm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzICBleHRlbmRzIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3Mge1xuICAgIG1lc3NhZ2U/IDogc3RyaW5nO1xuXHRldmVudElkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NpZ25hbE5vdGlmaWNhdGlvblRlbXBsYXRlIGV4dGVuZHMgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlIHtcblxuICAgIG1lc3NhZ2UgOiBzdHJpbmc7XG5cdGV2ZW50SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTaWduYWxOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2lnbmFsTm90aWZpY2F0aW9uVGVtcGxhdGUnIH0sXG5cdFx0XHRcdG1lc3NhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXZlbnRJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2lnbmFsTm90aWZpY2F0aW9uVGVtcGxhdGUnXSA9IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTaWduYWxOb3RpZmljYXRpb25UZW1wbGF0ZTsiXX0=