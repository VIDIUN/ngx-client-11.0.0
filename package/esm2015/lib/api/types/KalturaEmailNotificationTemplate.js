/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationFormat } from './KalturaEmailNotificationFormat';
import { KalturaEmailNotificationRecipientProvider } from './KalturaEmailNotificationRecipientProvider';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
/**
 * @record
 */
export function KalturaEmailNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.format;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.subject;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.body;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.fromEmail;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.fromName;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.to;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.cc;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.bcc;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.replyTo;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.priority;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.confirmReadingTo;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.hostname;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.messageID;
/** @type {?|undefined} */
KalturaEmailNotificationTemplateArgs.prototype.customHeaders;
export class KalturaEmailNotificationTemplate extends KalturaEventNotificationTemplate {
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
            objectType: { type: 'c', default: 'KalturaEmailNotificationTemplate' },
            format: { type: 'es', subTypeConstructor: KalturaEmailNotificationFormat, subType: 'KalturaEmailNotificationFormat' },
            subject: { type: 's' },
            body: { type: 's' },
            fromEmail: { type: 's' },
            fromName: { type: 's' },
            to: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
            cc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
            bcc: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
            replyTo: { type: 'o', subTypeConstructor: KalturaEmailNotificationRecipientProvider, subType: 'KalturaEmailNotificationRecipientProvider' },
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
    KalturaEmailNotificationTemplate.prototype.format;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.subject;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.body;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.fromEmail;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.fromName;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.to;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.cc;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.bcc;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.replyTo;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.priority;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.confirmReadingTo;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.hostname;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.messageID;
    /** @type {?} */
    KalturaEmailNotificationTemplate.prototype.customHeaders;
}
typesMappingStorage['KalturaEmailNotificationTemplate'] = KalturaEmailNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBd0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I1SCxNQUFNLHVDQUF3QyxTQUFRLGdDQUFnQzs7OztJQWlCbEYsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7S0FDMUU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ3pILE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDMUksRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDMUksR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDM0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDL0ksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3Q0FBd0MsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDL0ksZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDeEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25Gb3JtYXQgfSBmcm9tICcuL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkZvcm1hdCc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciB9IGZyb20gJy4vS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXInO1xuaW1wb3J0IHsgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eSB9IGZyb20gJy4vS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVQcmlvcml0eSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB7XG4gICAgZm9ybWF0PyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkZvcm1hdDtcblx0c3ViamVjdD8gOiBzdHJpbmc7XG5cdGJvZHk/IDogc3RyaW5nO1xuXHRmcm9tRW1haWw/IDogc3RyaW5nO1xuXHRmcm9tTmFtZT8gOiBzdHJpbmc7XG5cdHRvPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyO1xuXHRjYz8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcjtcblx0YmNjPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyO1xuXHRyZXBseVRvPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyO1xuXHRwcmlvcml0eT8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5O1xuXHRjb25maXJtUmVhZGluZ1RvPyA6IHN0cmluZztcblx0aG9zdG5hbWU/IDogc3RyaW5nO1xuXHRtZXNzYWdlSUQ/IDogc3RyaW5nO1xuXHRjdXN0b21IZWFkZXJzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZSBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlIHtcblxuICAgIGZvcm1hdCA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvbkZvcm1hdDtcblx0c3ViamVjdCA6IHN0cmluZztcblx0Ym9keSA6IHN0cmluZztcblx0ZnJvbUVtYWlsIDogc3RyaW5nO1xuXHRmcm9tTmFtZSA6IHN0cmluZztcblx0dG8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcjtcblx0Y2MgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcjtcblx0YmNjIDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXI7XG5cdHJlcGx5VG8gOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcjtcblx0cHJpb3JpdHkgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5O1xuXHRjb25maXJtUmVhZGluZ1RvIDogc3RyaW5nO1xuXHRob3N0bmFtZSA6IHN0cmluZztcblx0bWVzc2FnZUlEIDogc3RyaW5nO1xuXHRjdXN0b21IZWFkZXJzIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY3VzdG9tSGVhZGVycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY3VzdG9tSGVhZGVycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25Gb3JtYXQsIHN1YlR5cGUgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uRm9ybWF0JyB9LFxuXHRcdFx0XHRzdWJqZWN0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJvZHkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnJvbUVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyb21OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRvIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcicgfSxcblx0XHRcdFx0Y2MgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyLCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyJyB9LFxuXHRcdFx0XHRiY2MgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyLCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudFByb3ZpZGVyJyB9LFxuXHRcdFx0XHRyZXBseVRvIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlcicgfSxcblx0XHRcdFx0cHJpb3JpdHkgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZVByaW9yaXR5LCBzdWJUeXBlIDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlUHJpb3JpdHknIH0sXG5cdFx0XHRcdGNvbmZpcm1SZWFkaW5nVG8gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVzc2FnZUlEIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGN1c3RvbUhlYWRlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblRlbXBsYXRlJ10gPSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25UZW1wbGF0ZTsiXX0=