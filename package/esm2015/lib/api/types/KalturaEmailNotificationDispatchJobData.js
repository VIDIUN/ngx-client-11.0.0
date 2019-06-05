/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipientJobData } from './KalturaEmailNotificationRecipientJobData';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationDispatchJobData } from './KalturaEventNotificationDispatchJobData';
/**
 * @record
 */
export function KalturaEmailNotificationDispatchJobDataArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.fromEmail;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.fromName;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.to;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.cc;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.bcc;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.replyTo;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.priority;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.confirmReadingTo;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.hostname;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.messageID;
/** @type {?|undefined} */
KalturaEmailNotificationDispatchJobDataArgs.prototype.customHeaders;
export class KalturaEmailNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.customHeaders === 'undefined')
            this.customHeaders = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationDispatchJobData' },
            fromEmail: { type: 's' },
            fromName: { type: 's' },
            to: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            cc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            bcc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            replyTo: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientJobData, subType: 'KalturaEmailNotificationRecipientJobData' },
            priority: { type: 'en', subTypeConstructor: KalturaEmailNotificationTemplatePriority, subType: 'KalturaEmailNotificationTemplatePriority' },
            confirmReadingTo: { type: 's' },
            hostname: { type: 's' },
            messageID: { type: 's' },
            customHeaders: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.fromEmail;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.fromName;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.to;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.cc;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.bcc;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.replyTo;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.priority;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.confirmReadingTo;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.hostname;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.messageID;
    /** @type {?} */
    KalturaEmailNotificationDispatchJobData.prototype.customHeaders;
}
typesMappingStorage['KalturaEmailNotificationDispatchJobData'] = KalturaEmailNotificationDispatchJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVDQUF1QyxFQUErQyxNQUFNLDJDQUEyQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpKLE1BQU0sOENBQStDLFNBQVEsdUNBQXVDOzs7O0lBY2hHLFlBQVksSUFBbUQ7UUFFM0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0tBQzFFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3Q0FBd0MsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDeEksRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3Q0FBd0MsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDeEksR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3Q0FBd0MsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDekksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3Q0FBd0MsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDN0ksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3Q0FBd0MsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDL0ksZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDeEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUNBQXlDLENBQUMsR0FBRyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhIH0gZnJvbSAnLi9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhJztcbmltcG9ydCB7IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlUHJpb3JpdHkgfSBmcm9tICcuL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlUHJpb3JpdHknO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhQXJncyB7XG4gICAgZnJvbUVtYWlsPyA6IHN0cmluZztcblx0ZnJvbU5hbWU/IDogc3RyaW5nO1xuXHR0bz8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhO1xuXHRjYz8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhO1xuXHRiY2M/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YTtcblx0cmVwbHlUbz8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhO1xuXHRwcmlvcml0eT8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5O1xuXHRjb25maXJtUmVhZGluZ1RvPyA6IHN0cmluZztcblx0aG9zdG5hbWU/IDogc3RyaW5nO1xuXHRtZXNzYWdlSUQ/IDogc3RyaW5nO1xuXHRjdXN0b21IZWFkZXJzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEge1xuXG4gICAgZnJvbUVtYWlsIDogc3RyaW5nO1xuXHRmcm9tTmFtZSA6IHN0cmluZztcblx0dG8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhO1xuXHRjYyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGE7XG5cdGJjYyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGE7XG5cdHJlcGx5VG8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhO1xuXHRwcmlvcml0eSA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlUHJpb3JpdHk7XG5cdGNvbmZpcm1SZWFkaW5nVG8gOiBzdHJpbmc7XG5cdGhvc3RuYW1lIDogc3RyaW5nO1xuXHRtZXNzYWdlSUQgOiBzdHJpbmc7XG5cdGN1c3RvbUhlYWRlcnMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY3VzdG9tSGVhZGVycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY3VzdG9tSGVhZGVycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YScgfSxcblx0XHRcdFx0ZnJvbUVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyb21OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRvIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEnIH0sXG5cdFx0XHRcdGNjIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEnIH0sXG5cdFx0XHRcdGJjYyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRyZXBseVRvIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEnIH0sXG5cdFx0XHRcdHByaW9yaXR5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5JyB9LFxuXHRcdFx0XHRjb25maXJtUmVhZGluZ1RvIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhvc3RuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lc3NhZ2VJRCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdXN0b21IZWFkZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW1haWxOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnXSA9IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YTsiXX0=