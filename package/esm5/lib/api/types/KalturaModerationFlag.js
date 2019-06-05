/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaModerationObjectType } from './KalturaModerationObjectType';
import { KalturaModerationFlagStatus } from './KalturaModerationFlagStatus';
import { KalturaModerationFlagType } from './KalturaModerationFlagType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaModerationFlagArgs() { }
/** @type {?|undefined} */
KalturaModerationFlagArgs.prototype.flaggedEntryId;
/** @type {?|undefined} */
KalturaModerationFlagArgs.prototype.flaggedUserId;
/** @type {?|undefined} */
KalturaModerationFlagArgs.prototype.comments;
/** @type {?|undefined} */
KalturaModerationFlagArgs.prototype.flagType;
var KalturaModerationFlag = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaModerationFlag, _super);
    function KalturaModerationFlag(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaModerationFlag.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaModerationFlag' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            userId: { type: 's', readOnly: true },
            moderationObjectType: { type: 'es', readOnly: true, subTypeConstructor: KalturaModerationObjectType, subType: 'KalturaModerationObjectType' },
            flaggedEntryId: { type: 's' },
            flaggedUserId: { type: 's' },
            status: { type: 'es', readOnly: true, subTypeConstructor: KalturaModerationFlagStatus, subType: 'KalturaModerationFlagStatus' },
            comments: { type: 's' },
            flagType: { type: 'en', subTypeConstructor: KalturaModerationFlagType, subType: 'KalturaModerationFlagType' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true }
        });
        return result;
    };
    return KalturaModerationFlag;
}(KalturaObjectBase));
export { KalturaModerationFlag };
if (false) {
    /** @type {?} */
    KalturaModerationFlag.prototype.id;
    /** @type {?} */
    KalturaModerationFlag.prototype.partnerId;
    /** @type {?} */
    KalturaModerationFlag.prototype.userId;
    /** @type {?} */
    KalturaModerationFlag.prototype.moderationObjectType;
    /** @type {?} */
    KalturaModerationFlag.prototype.flaggedEntryId;
    /** @type {?} */
    KalturaModerationFlag.prototype.flaggedUserId;
    /** @type {?} */
    KalturaModerationFlag.prototype.status;
    /** @type {?} */
    KalturaModerationFlag.prototype.comments;
    /** @type {?} */
    KalturaModerationFlag.prototype.flagType;
    /** @type {?} */
    KalturaModerationFlag.prototype.createdAt;
    /** @type {?} */
    KalturaModerationFlag.prototype.updatedAt;
}
typesMappingStorage['KalturaModerationFlag'] = KalturaModerationFlag;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1vZGVyYXRpb25GbGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTW9kZXJhdGlvbkZsYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLElBQUE7SUFBMkMsaURBQWlCO0lBY3hELCtCQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2xKLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3BJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDakgsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNsQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQXZETDtFQWUyQyxpQkFBaUIsRUF5QzNELENBQUE7QUF6Q0QsaUNBeUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTW9kZXJhdGlvbk9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFNb2RlcmF0aW9uT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTW9kZXJhdGlvbkZsYWdTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFNb2RlcmF0aW9uRmxhZ1N0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTW9kZXJhdGlvbkZsYWdUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTW9kZXJhdGlvbkZsYWdUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTW9kZXJhdGlvbkZsYWdBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZmxhZ2dlZEVudHJ5SWQ/IDogc3RyaW5nO1xuXHRmbGFnZ2VkVXNlcklkPyA6IHN0cmluZztcblx0Y29tbWVudHM/IDogc3RyaW5nO1xuXHRmbGFnVHlwZT8gOiBLYWx0dXJhTW9kZXJhdGlvbkZsYWdUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTW9kZXJhdGlvbkZsYWcgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSB1c2VySWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG1vZGVyYXRpb25PYmplY3RUeXBlIDogS2FsdHVyYU1vZGVyYXRpb25PYmplY3RUeXBlO1xuXHRmbGFnZ2VkRW50cnlJZCA6IHN0cmluZztcblx0ZmxhZ2dlZFVzZXJJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYU1vZGVyYXRpb25GbGFnU3RhdHVzO1xuXHRjb21tZW50cyA6IHN0cmluZztcblx0ZmxhZ1R5cGUgOiBLYWx0dXJhTW9kZXJhdGlvbkZsYWdUeXBlO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTW9kZXJhdGlvbkZsYWdBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1vZGVyYXRpb25GbGFnJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG1vZGVyYXRpb25PYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTW9kZXJhdGlvbk9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1vZGVyYXRpb25PYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRmbGFnZ2VkRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGFnZ2VkVXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1vZGVyYXRpb25GbGFnU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFNb2RlcmF0aW9uRmxhZ1N0YXR1cycgfSxcblx0XHRcdFx0Y29tbWVudHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmxhZ1R5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTW9kZXJhdGlvbkZsYWdUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNb2RlcmF0aW9uRmxhZ1R5cGUnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNb2RlcmF0aW9uRmxhZyddID0gS2FsdHVyYU1vZGVyYXRpb25GbGFnOyJdfQ==