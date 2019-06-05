/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaControlPanelCommand = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaControlPanelCommand, _super);
    function KalturaControlPanelCommand(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaControlPanelCommand.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaControlPanelCommand;
}(KalturaObjectBase));
export { KalturaControlPanelCommand };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JsRixJQUFBO0lBQWdELHNEQUFpQjtJQW9CN0Qsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUN2SCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9DQUFvQyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6SSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUM3SCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBN0VMO0VBeUJnRCxpQkFBaUIsRUFxRGhFLENBQUE7QUFyREQsc0NBcURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGUgfSBmcm9tICcuL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFRhcmdldFR5cGUgfSBmcm9tICcuL0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGNyZWF0ZWRCeT8gOiBzdHJpbmc7XG5cdHVwZGF0ZWRCeT8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRCeUlkPyA6IG51bWJlcjtcblx0c2NoZWR1bGVySWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJJZD8gOiBudW1iZXI7XG5cdHdvcmtlckNvbmZpZ3VyZWRJZD8gOiBudW1iZXI7XG5cdHdvcmtlck5hbWU/IDogbnVtYmVyO1xuXHRiYXRjaEluZGV4PyA6IG51bWJlcjtcblx0dHlwZT8gOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGU7XG5cdHRhcmdldFR5cGU/IDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUYXJnZXRUeXBlO1xuXHRzdGF0dXM/IDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXM7XG5cdGNhdXNlPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRlcnJvckRlc2NyaXB0aW9uPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0Y3JlYXRlZEJ5IDogc3RyaW5nO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHR1cGRhdGVkQnkgOiBzdHJpbmc7XG5cdGNyZWF0ZWRCeUlkIDogbnVtYmVyO1xuXHRzY2hlZHVsZXJJZCA6IG51bWJlcjtcblx0d29ya2VySWQgOiBudW1iZXI7XG5cdHdvcmtlckNvbmZpZ3VyZWRJZCA6IG51bWJlcjtcblx0d29ya2VyTmFtZSA6IG51bWJlcjtcblx0YmF0Y2hJbmRleCA6IG51bWJlcjtcblx0dHlwZSA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVHlwZTtcblx0dGFyZ2V0VHlwZSA6IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZTtcblx0c3RhdHVzIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXM7XG5cdGNhdXNlIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0ZXJyb3JEZXNjcmlwdGlvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEJ5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRCeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQnlJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2hlZHVsZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3b3JrZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3b3JrZXJDb25maWd1cmVkSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d29ya2VyTmFtZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRiYXRjaEluZGV4IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udHJvbFBhbmVsQ29tbWFuZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUeXBlJyB9LFxuXHRcdFx0XHR0YXJnZXRUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRUYXJnZXRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDb250cm9sUGFuZWxDb21tYW5kVGFyZ2V0VHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmRTdGF0dXMnIH0sXG5cdFx0XHRcdGNhdXNlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVycm9yRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnRyb2xQYW5lbENvbW1hbmQnXSA9IEthbHR1cmFDb250cm9sUGFuZWxDb21tYW5kOyJdfQ==