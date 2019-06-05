/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaNotificationStatus } from './KalturaNotificationStatus';
import { KalturaNotificationObjectType } from './KalturaNotificationObjectType';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaNotificationJobDataArgs() { }
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.userId;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.type;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.typeAsString;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.status;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.data;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.numberOfAttempts;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.notificationResult;
/** @type {?|undefined} */
KalturaNotificationJobDataArgs.prototype.objType;
export class KalturaNotificationJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaNotificationJobData' },
            userId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaNotificationType, subType: 'KalturaNotificationType' },
            typeAsString: { type: 's' },
            objectId: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaNotificationStatus, subType: 'KalturaNotificationStatus' },
            data: { type: 's' },
            numberOfAttempts: { type: 'n' },
            notificationResult: { type: 's' },
            objType: { type: 'en', subTypeConstructor: KalturaNotificationObjectType, subType: 'KalturaNotificationObjectType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaNotificationJobData.prototype.userId;
    /** @type {?} */
    KalturaNotificationJobData.prototype.type;
    /** @type {?} */
    KalturaNotificationJobData.prototype.typeAsString;
    /** @type {?} */
    KalturaNotificationJobData.prototype.objectId;
    /** @type {?} */
    KalturaNotificationJobData.prototype.status;
    /** @type {?} */
    KalturaNotificationJobData.prototype.data;
    /** @type {?} */
    KalturaNotificationJobData.prototype.numberOfAttempts;
    /** @type {?} */
    KalturaNotificationJobData.prototype.notificationResult;
    /** @type {?} */
    KalturaNotificationJobData.prototype.objType;
}
typesMappingStorage['KalturaNotificationJobData'] = KalturaNotificationJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU5vdGlmaWNhdGlvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFOb3RpZmljYXRpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFldEUsTUFBTSxpQ0FBa0MsU0FBUSxjQUFjOzs7O0lBWTFELFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDekcsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQy9HLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUMvRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU5vdGlmaWNhdGlvblR5cGUgfSBmcm9tICcuL0thbHR1cmFOb3RpZmljYXRpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFOb3RpZmljYXRpb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFOb3RpZmljYXRpb25TdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU5vdGlmaWNhdGlvbk9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFOb3RpZmljYXRpb25PYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTm90aWZpY2F0aW9uSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICB1c2VySWQ/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFOb3RpZmljYXRpb25UeXBlO1xuXHR0eXBlQXNTdHJpbmc/IDogc3RyaW5nO1xuXHRvYmplY3RJZD8gOiBzdHJpbmc7XG5cdHN0YXR1cz8gOiBLYWx0dXJhTm90aWZpY2F0aW9uU3RhdHVzO1xuXHRkYXRhPyA6IHN0cmluZztcblx0bnVtYmVyT2ZBdHRlbXB0cz8gOiBudW1iZXI7XG5cdG5vdGlmaWNhdGlvblJlc3VsdD8gOiBzdHJpbmc7XG5cdG9ialR5cGU/IDogS2FsdHVyYU5vdGlmaWNhdGlvbk9iamVjdFR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFOb3RpZmljYXRpb25Kb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgdXNlcklkIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYU5vdGlmaWNhdGlvblR5cGU7XG5cdHR5cGVBc1N0cmluZyA6IHN0cmluZztcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdHN0YXR1cyA6IEthbHR1cmFOb3RpZmljYXRpb25TdGF0dXM7XG5cdGRhdGEgOiBzdHJpbmc7XG5cdG51bWJlck9mQXR0ZW1wdHMgOiBudW1iZXI7XG5cdG5vdGlmaWNhdGlvblJlc3VsdCA6IHN0cmluZztcblx0b2JqVHlwZSA6IEthbHR1cmFOb3RpZmljYXRpb25PYmplY3RUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTm90aWZpY2F0aW9uSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTm90aWZpY2F0aW9uSm9iRGF0YScgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTm90aWZpY2F0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTm90aWZpY2F0aW9uVHlwZScgfSxcblx0XHRcdFx0dHlwZUFzU3RyaW5nIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOb3RpZmljYXRpb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYU5vdGlmaWNhdGlvblN0YXR1cycgfSxcblx0XHRcdFx0ZGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRudW1iZXJPZkF0dGVtcHRzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG5vdGlmaWNhdGlvblJlc3VsdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmpUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU5vdGlmaWNhdGlvbk9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU5vdGlmaWNhdGlvbk9iamVjdFR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFOb3RpZmljYXRpb25Kb2JEYXRhJ10gPSBLYWx0dXJhTm90aWZpY2F0aW9uSm9iRGF0YTsiXX0=