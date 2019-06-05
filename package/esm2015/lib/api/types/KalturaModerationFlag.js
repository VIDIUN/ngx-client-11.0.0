/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaModerationFlag extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1vZGVyYXRpb25GbGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTW9kZXJhdGlvbkZsYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsTUFBTSw0QkFBNkIsU0FBUSxpQkFBaUI7Ozs7SUFjeEQsWUFBWSxJQUFpQztRQUV6QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2xKLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3BJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDakgsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNsQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNb2RlcmF0aW9uT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYU1vZGVyYXRpb25PYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFNb2RlcmF0aW9uRmxhZ1N0YXR1cyB9IGZyb20gJy4vS2FsdHVyYU1vZGVyYXRpb25GbGFnU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFNb2RlcmF0aW9uRmxhZ1R5cGUgfSBmcm9tICcuL0thbHR1cmFNb2RlcmF0aW9uRmxhZ1R5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNb2RlcmF0aW9uRmxhZ0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBmbGFnZ2VkRW50cnlJZD8gOiBzdHJpbmc7XG5cdGZsYWdnZWRVc2VySWQ/IDogc3RyaW5nO1xuXHRjb21tZW50cz8gOiBzdHJpbmc7XG5cdGZsYWdUeXBlPyA6IEthbHR1cmFNb2RlcmF0aW9uRmxhZ1R5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNb2RlcmF0aW9uRmxhZyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHVzZXJJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgbW9kZXJhdGlvbk9iamVjdFR5cGUgOiBLYWx0dXJhTW9kZXJhdGlvbk9iamVjdFR5cGU7XG5cdGZsYWdnZWRFbnRyeUlkIDogc3RyaW5nO1xuXHRmbGFnZ2VkVXNlcklkIDogc3RyaW5nO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhTW9kZXJhdGlvbkZsYWdTdGF0dXM7XG5cdGNvbW1lbnRzIDogc3RyaW5nO1xuXHRmbGFnVHlwZSA6IEthbHR1cmFNb2RlcmF0aW9uRmxhZ1R5cGU7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNb2RlcmF0aW9uRmxhZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTW9kZXJhdGlvbkZsYWcnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bW9kZXJhdGlvbk9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNb2RlcmF0aW9uT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTW9kZXJhdGlvbk9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdGZsYWdnZWRFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYWdnZWRVc2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTW9kZXJhdGlvbkZsYWdTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYU1vZGVyYXRpb25GbGFnU3RhdHVzJyB9LFxuXHRcdFx0XHRjb21tZW50cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGFnVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNb2RlcmF0aW9uRmxhZ1R5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1vZGVyYXRpb25GbGFnVHlwZScgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1vZGVyYXRpb25GbGFnJ10gPSBLYWx0dXJhTW9kZXJhdGlvbkZsYWc7Il19