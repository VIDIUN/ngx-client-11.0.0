/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaQuizArgs() { }
/** @type {?|undefined} */
KalturaQuizArgs.prototype.uiAttributes;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showResultOnAnswer;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showCorrectKeyOnAnswer;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.allowAnswerUpdate;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showCorrectAfterSubmission;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.allowDownload;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showGradeAfterSubmission;
export class KalturaQuiz extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.uiAttributes === 'undefined')
            this.uiAttributes = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaQuiz' },
            version: { type: 'n', readOnly: true },
            uiAttributes: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            showResultOnAnswer: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            showCorrectKeyOnAnswer: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            allowAnswerUpdate: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            showCorrectAfterSubmission: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            allowDownload: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            showGradeAfterSubmission: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaQuiz.prototype.version;
    /** @type {?} */
    KalturaQuiz.prototype.uiAttributes;
    /** @type {?} */
    KalturaQuiz.prototype.showResultOnAnswer;
    /** @type {?} */
    KalturaQuiz.prototype.showCorrectKeyOnAnswer;
    /** @type {?} */
    KalturaQuiz.prototype.allowAnswerUpdate;
    /** @type {?} */
    KalturaQuiz.prototype.showCorrectAfterSubmission;
    /** @type {?} */
    KalturaQuiz.prototype.allowDownload;
    /** @type {?} */
    KalturaQuiz.prototype.showGradeAfterSubmission;
}
typesMappingStorage['KalturaQuiz'] = KalturaQuiz;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVF1aXouanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFRdWl6LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFsRixNQUFNLGtCQUFtQixTQUFRLGlCQUFpQjs7OztJQVc5QyxZQUFZLElBQXVCO1FBRS9CLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztLQUN4RTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDaEcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNySCxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3pILGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDcEgsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3SCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNoSCx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ2xILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxHQUFHLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUXVpekFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB1aUF0dHJpYnV0ZXM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdHNob3dSZXN1bHRPbkFuc3dlcj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG93Q29ycmVjdEtleU9uQW5zd2VyPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGFsbG93QW5zd2VyVXBkYXRlPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3dDb3JyZWN0QWZ0ZXJTdWJtaXNzaW9uPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGFsbG93RG93bmxvYWQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0c2hvd0dyYWRlQWZ0ZXJTdWJtaXNzaW9uPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFRdWl6IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgdmVyc2lvbiA6IG51bWJlcjtcblx0dWlBdHRyaWJ1dGVzIDogS2FsdHVyYUtleVZhbHVlW107XG5cdHNob3dSZXN1bHRPbkFuc3dlciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3dDb3JyZWN0S2V5T25BbnN3ZXIgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRhbGxvd0Fuc3dlclVwZGF0ZSA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3dDb3JyZWN0QWZ0ZXJTdWJtaXNzaW9uIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0YWxsb3dEb3dubG9hZCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3dHcmFkZUFmdGVyU3VibWlzc2lvbiA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFRdWl6QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudWlBdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJykgdGhpcy51aUF0dHJpYnV0ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUXVpeicgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVpQXR0cmlidXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0c2hvd1Jlc3VsdE9uQW5zd2VyIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRzaG93Q29ycmVjdEtleU9uQW5zd2VyIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRhbGxvd0Fuc3dlclVwZGF0ZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0c2hvd0NvcnJlY3RBZnRlclN1Ym1pc3Npb24gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGFsbG93RG93bmxvYWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHNob3dHcmFkZUFmdGVyU3VibWlzc2lvbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVF1aXonXSA9IEthbHR1cmFRdWl6OyJdfQ==