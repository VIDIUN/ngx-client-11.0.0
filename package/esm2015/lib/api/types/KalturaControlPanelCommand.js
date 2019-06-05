/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaControlPanelCommandType } from './KalturaControlPanelCommandType';
import { KalturaControlPanelCommandTargetType } from './KalturaControlPanelCommandTargetType';
import { KalturaControlPanelCommandStatus } from './KalturaControlPanelCommandStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaControlPanelCommandArgs() { }
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.createdBy;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.updatedBy;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.createdById;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.schedulerId;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.workerId;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.workerConfiguredId;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.workerName;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.batchIndex;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.type;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.targetType;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.status;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.cause;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.description;
/** @type {?|undefined} */
KalturaControlPanelCommandArgs.prototype.errorDescription;
export class KalturaControlPanelCommand extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaControlPanelCommand' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            createdBy: { type: 's' },
            updatedAt: { type: 'd', readOnly: true },
            updatedBy: { type: 's' },
            createdById: { type: 'n' },
            schedulerId: { type: 'n' },
            workerId: { type: 'n' },
            workerConfiguredId: { type: 'n' },
            workerName: { type: 'n' },
            batchIndex: { type: 'n' },
            type: { type: 'en', subTypeConstructor: KalturaControlPanelCommandType, subType: 'KalturaControlPanelCommandType' },
            targetType: { type: 'en', subTypeConstructor: KalturaControlPanelCommandTargetType, subType: 'KalturaControlPanelCommandTargetType' },
            status: { type: 'en', subTypeConstructor: KalturaControlPanelCommandStatus, subType: 'KalturaControlPanelCommandStatus' },
            cause: { type: 's' },
            description: { type: 's' },
            errorDescription: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaControlPanelCommand.prototype.id;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.createdAt;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.createdBy;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.updatedAt;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.updatedBy;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.createdById;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.schedulerId;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.workerId;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.workerConfiguredId;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.workerName;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.batchIndex;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.type;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.targetType;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.status;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.cause;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.description;
    /** @type {?} */
    KalturaControlPanelCommand.prototype.errorDescription;
}
typesMappingStorage['KalturaControlPanelCommand'] = KalturaControlPanelCommand;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmxGLE1BQU0saUNBQWtDLFNBQVEsaUJBQWlCOzs7O0lBb0I3RCxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUN2SCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9DQUFvQyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6SSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUM3SCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUYXJnZXRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBjcmVhdGVkQnk/IDogc3RyaW5nO1xuXHR1cGRhdGVkQnk/IDogc3RyaW5nO1xuXHRjcmVhdGVkQnlJZD8gOiBudW1iZXI7XG5cdHNjaGVkdWxlcklkPyA6IG51bWJlcjtcblx0d29ya2VySWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJDb25maWd1cmVkSWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJOYW1lPyA6IG51bWJlcjtcblx0YmF0Y2hJbmRleD8gOiBudW1iZXI7XG5cdHR5cGU/IDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUeXBlO1xuXHR0YXJnZXRUeXBlPyA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZTtcblx0c3RhdHVzPyA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzO1xuXHRjYXVzZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0ZXJyb3JEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdGNyZWF0ZWRCeSA6IHN0cmluZztcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0dXBkYXRlZEJ5IDogc3RyaW5nO1xuXHRjcmVhdGVkQnlJZCA6IG51bWJlcjtcblx0c2NoZWR1bGVySWQgOiBudW1iZXI7XG5cdHdvcmtlcklkIDogbnVtYmVyO1xuXHR3b3JrZXJDb25maWd1cmVkSWQgOiBudW1iZXI7XG5cdHdvcmtlck5hbWUgOiBudW1iZXI7XG5cdGJhdGNoSW5kZXggOiBudW1iZXI7XG5cdHR5cGUgOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGU7XG5cdHRhcmdldFR5cGUgOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGU7XG5cdHN0YXR1cyA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzO1xuXHRjYXVzZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGVycm9yRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRCeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEJ5SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d29ya2VySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d29ya2VyQ29uZmlndXJlZElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdvcmtlck5hbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YmF0Y2hJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVHlwZScgfSxcblx0XHRcdFx0dGFyZ2V0VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGUnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kU3RhdHVzJyB9LFxuXHRcdFx0XHRjYXVzZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJvckRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kJ10gPSBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZDsiXX0=