/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
/**
 * @record
 */
export function KalturaBusinessProcessNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessNotificationTemplateArgs.prototype.serverId;
/** @type {?|undefined} */
KalturaBusinessProcessNotificationTemplateArgs.prototype.processId;
/** @type {?|undefined} */
KalturaBusinessProcessNotificationTemplateArgs.prototype.mainObjectCode;
var KalturaBusinessProcessNotificationTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessNotificationTemplate, _super);
    function KalturaBusinessProcessNotificationTemplate(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessNotificationTemplate.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessNotificationTemplate' },
            serverId: { type: 'n' },
            processId: { type: 's' },
            mainObjectCode: { type: 's' }
        });
        return result;
    };
    return KalturaBusinessProcessNotificationTemplate;
}(KalturaEventNotificationTemplate));
export { KalturaBusinessProcessNotificationTemplate };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessNotificationTemplate.prototype.serverId;
    /** @type {?} */
    KalturaBusinessProcessNotificationTemplate.prototype.processId;
    /** @type {?} */
    KalturaBusinessProcessNotificationTemplate.prototype.mainObjectCode;
}
typesMappingStorage['KalturaBusinessProcessNotificationTemplate'] = KalturaBusinessProcessNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUF3QyxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7Ozs7OztBQVM1SCxJQUFBO0lBQWdFLHNFQUFnQztJQU01RixvREFBWSxJQUFzRDtlQUU5RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1lBQy9GLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3RCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBbkNMO0VBV2dFLGdDQUFnQyxFQXlCL0YsQ0FBQTtBQXpCRCxzREF5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRDQUE0QyxDQUFDLEdBQUcsMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUsIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzIHtcbiAgICBzZXJ2ZXJJZD8gOiBudW1iZXI7XG5cdHByb2Nlc3NJZD8gOiBzdHJpbmc7XG5cdG1haW5PYmplY3RDb2RlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGUge1xuXG4gICAgc2VydmVySWQgOiBudW1iZXI7XG5cdHByb2Nlc3NJZCA6IHN0cmluZztcblx0bWFpbk9iamVjdENvZGUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uVGVtcGxhdGUnIH0sXG5cdFx0XHRcdHNlcnZlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByb2Nlc3NJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYWluT2JqZWN0Q29kZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uVGVtcGxhdGUnXSA9IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZTsiXX0=