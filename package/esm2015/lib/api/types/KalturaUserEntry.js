/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUserEntryArgs() { }
/** @type {?|undefined} */
KalturaUserEntryArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaUserEntryArgs.prototype.userId;
/** @type {?|undefined} */
KalturaUserEntryArgs.prototype.extendedStatus;
export class KalturaUserEntry extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaUserEntry' },
            id: { type: 'n', readOnly: true },
            entryId: { type: 's' },
            userId: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            status: { type: 'es', readOnly: true, subTypeConstructor: KalturaUserEntryStatus, subType: 'KalturaUserEntryStatus' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            type: { type: 'es', readOnly: true, subTypeConstructor: KalturaUserEntryType, subType: 'KalturaUserEntryType' },
            extendedStatus: { type: 'es', subTypeConstructor: KalturaUserEntryExtendedStatus, subType: 'KalturaUserEntryExtendedStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUserEntry.prototype.id;
    /** @type {?} */
    KalturaUserEntry.prototype.entryId;
    /** @type {?} */
    KalturaUserEntry.prototype.userId;
    /** @type {?} */
    KalturaUserEntry.prototype.partnerId;
    /** @type {?} */
    KalturaUserEntry.prototype.status;
    /** @type {?} */
    KalturaUserEntry.prototype.createdAt;
    /** @type {?} */
    KalturaUserEntry.prototype.updatedAt;
    /** @type {?} */
    KalturaUserEntry.prototype.type;
    /** @type {?} */
    KalturaUserEntry.prototype.extendedStatus;
}
typesMappingStorage['KalturaUserEntry'] = KalturaUserEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVzZXJFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsTUFBTSx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7SUFZbkQsWUFBWSxJQUE0QjtRQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDckUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMxSCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDcEgsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7U0FDeEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRW50cnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeVR5cGUgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnlUeXBlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXNlckVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGVudHJ5SWQ/IDogc3RyaW5nO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHRleHRlbmRlZFN0YXR1cz8gOiBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXM7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVc2VyRW50cnkgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0dXNlcklkIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFVc2VyRW50cnlTdGF0dXM7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHR5cGUgOiBLYWx0dXJhVXNlckVudHJ5VHlwZTtcblx0ZXh0ZW5kZWRTdGF0dXMgOiBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVc2VyRW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVzZXJFbnRyeScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRW50cnlTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJFbnRyeVN0YXR1cycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJFbnRyeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJFbnRyeVR5cGUnIH0sXG5cdFx0XHRcdGV4dGVuZGVkU3RhdHVzIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVzZXJFbnRyeSddID0gS2FsdHVyYVVzZXJFbnRyeTsiXX0=