/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaMailNotificationObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.mailTo;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.sender;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.subject;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.message;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.footer;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.link;
/** @type {?|undefined} */
KalturaMailNotificationObjectTaskArgs.prototype.sendToUsers;
var KalturaMailNotificationObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMailNotificationObjectTask, _super);
    function KalturaMailNotificationObjectTask(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMailNotificationObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMailNotificationObjectTask' },
            mailTo: { type: 's' },
            sender: { type: 's' },
            subject: { type: 's' },
            message: { type: 's' },
            footer: { type: 's' },
            link: { type: 's' },
            sendToUsers: { type: 'b' }
        });
        return result;
    };
    return KalturaMailNotificationObjectTask;
}(KalturaObjectTask));
export { KalturaMailNotificationObjectTask };
if (false) {
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.mailTo;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.sender;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.subject;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.message;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.footer;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.link;
    /** @type {?} */
    KalturaMailNotificationObjectTask.prototype.sendToUsers;
}
typesMappingStorage['KalturaMailNotificationObjectTask'] = KalturaMailNotificationObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1haWxOb3RpZmljYXRpb25PYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWFpbE5vdGlmaWNhdGlvbk9iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYS9FLElBQUE7SUFBdUQsNkRBQWlCO0lBVXBFLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQS9DTDtFQWV1RCxpQkFBaUIsRUFpQ3ZFLENBQUE7QUFqQ0QsNkNBaUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdFRhc2ssIEthbHR1cmFPYmplY3RUYXNrQXJncyB9IGZyb20gJy4vS2FsdHVyYU9iamVjdFRhc2snO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNYWlsTm90aWZpY2F0aW9uT2JqZWN0VGFza0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2tBcmdzIHtcbiAgICBtYWlsVG8/IDogc3RyaW5nO1xuXHRzZW5kZXI/IDogc3RyaW5nO1xuXHRzdWJqZWN0PyA6IHN0cmluZztcblx0bWVzc2FnZT8gOiBzdHJpbmc7XG5cdGZvb3Rlcj8gOiBzdHJpbmc7XG5cdGxpbms/IDogc3RyaW5nO1xuXHRzZW5kVG9Vc2Vycz8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWFpbE5vdGlmaWNhdGlvbk9iamVjdFRhc2sgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFzayB7XG5cbiAgICBtYWlsVG8gOiBzdHJpbmc7XG5cdHNlbmRlciA6IHN0cmluZztcblx0c3ViamVjdCA6IHN0cmluZztcblx0bWVzc2FnZSA6IHN0cmluZztcblx0Zm9vdGVyIDogc3RyaW5nO1xuXHRsaW5rIDogc3RyaW5nO1xuXHRzZW5kVG9Vc2VycyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNYWlsTm90aWZpY2F0aW9uT2JqZWN0VGFza0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWFpbE5vdGlmaWNhdGlvbk9iamVjdFRhc2snIH0sXG5cdFx0XHRcdG1haWxUbyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZW5kZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3ViamVjdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXNzYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZvb3RlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsaW5rIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlbmRUb1VzZXJzIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNYWlsTm90aWZpY2F0aW9uT2JqZWN0VGFzayddID0gS2FsdHVyYU1haWxOb3RpZmljYXRpb25PYmplY3RUYXNrOyJdfQ==