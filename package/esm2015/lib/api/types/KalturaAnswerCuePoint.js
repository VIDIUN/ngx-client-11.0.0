/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaAnswerCuePointArgs() { }
/** @type {?|undefined} */
KalturaAnswerCuePointArgs.prototype.parentId;
/** @type {?|undefined} */
KalturaAnswerCuePointArgs.prototype.quizUserEntryId;
/** @type {?|undefined} */
KalturaAnswerCuePointArgs.prototype.answerKey;
export class KalturaAnswerCuePoint extends KalturaCuePoint {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.correctAnswerKeys === 'undefined')
            this.correctAnswerKeys = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAnswerCuePoint' },
            parentId: { type: 's' },
            quizUserEntryId: { type: 's' },
            answerKey: { type: 's' },
            isCorrect: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            correctAnswerKeys: { type: 'a', readOnly: true, subTypeConstructor: KalturaString, subType: 'KalturaString' },
            explanation: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.parentId;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.quizUserEntryId;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.answerKey;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.isCorrect;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.correctAnswerKeys;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.explanation;
}
typesMappingStorage['KalturaAnswerCuePoint'] = KalturaAnswerCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFuc3dlckN1ZVBvaW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQW5zd2VyQ3VlUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBdUIsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTekUsTUFBTSw0QkFBNkIsU0FBUSxlQUFlOzs7O0lBU3RELFlBQVksSUFBaUM7UUFFekMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztLQUNsRjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3SCxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsSCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDcEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZyc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnQsIEthbHR1cmFDdWVQb2ludEFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFuc3dlckN1ZVBvaW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRBcmdzIHtcbiAgICBwYXJlbnRJZD8gOiBzdHJpbmc7XG5cdHF1aXpVc2VyRW50cnlJZD8gOiBzdHJpbmc7XG5cdGFuc3dlcktleT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBbnN3ZXJDdWVQb2ludCBleHRlbmRzIEthbHR1cmFDdWVQb2ludCB7XG5cbiAgICBwYXJlbnRJZCA6IHN0cmluZztcblx0cXVpelVzZXJFbnRyeUlkIDogc3RyaW5nO1xuXHRhbnN3ZXJLZXkgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGlzQ29ycmVjdCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHJlYWRvbmx5IGNvcnJlY3RBbnN3ZXJLZXlzIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRyZWFkb25seSBleHBsYW5hdGlvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFuc3dlckN1ZVBvaW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29ycmVjdEFuc3dlcktleXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNvcnJlY3RBbnN3ZXJLZXlzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFuc3dlckN1ZVBvaW50JyB9LFxuXHRcdFx0XHRwYXJlbnRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRxdWl6VXNlckVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YW5zd2VyS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzQ29ycmVjdCA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRjb3JyZWN0QW5zd2VyS2V5cyA6IHsgdHlwZSA6ICdhJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmcnIH0sXG5cdFx0XHRcdGV4cGxhbmF0aW9uIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFuc3dlckN1ZVBvaW50J10gPSBLYWx0dXJhQW5zd2VyQ3VlUG9pbnQ7Il19